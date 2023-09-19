
import React, { useState, useEffect } from 'react';
import Service from '../../../utilities/http';
import { useNavigate,Link } from 'react-router-dom';
import Cookies from "js-cookie";
import axios from 'axios';

function PatientDiagnosis_PV() {
  const service = new Service();
  const [patientid, setPatientid] = useState('');
  const [reports, setReports] = useState([]);
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
 // const [file, setFile] = useState('')

 const [firstName, setFirstName] = useState("")
  const [lastName, setlastName] = useState("")
  

 const un = Cookies.get('username')


  useEffect(() => {
    getPatients();
  }, []);

  
  function getPatients() {
    const response = service.get(`patient/getby/${un}`);
    response
      .then((res) => {
        setPatientid(res.data._id);
        setFirstName(res.data.firstName);
        setlastName(res.data.lastName);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  

  const handleClick = (e) => {
    e.preventDefault();
    if (!patientid) {
      return;
    }

    const response = service.get(`reports/${patientid}`);
    response
      .then((res) => {
        // console.log(res.data);
        setReports(res.data);
        setFiles
      })
      .catch((error) => {
        console.error('Error fetching reports:', error);
      });
  };

  

  const downloadReport = () => {
    if (!selectedFile) {
        alert('Please select a file to download.');
        return;
      }
     
      axios.post('http://localhost:4000/api/reports/download', { file: selectedFile }, { responseType: 'blob' })
      .then((response) => {
        // Create a Blob from the response data
        const blob = new Blob([response.data]);
        const url = window.URL.createObjectURL(blob);

        // Create a temporary <a> element to trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = selectedFile; // Set the desired file name
        document.body.appendChild(a);
        a.click();

        // Cleanup
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('File download error:', error);
        alert('File download failed.');
      });

      setSelectedFile(null)

  };

  
  return (
    <main className="main-container">
      <div className="row">
        <div className="col-md-12">
          <h5 className="mt-2">Patient Details</h5>
          <br />
          <br />
          <form>
            <div className="col-md-6">
              <div className="mb-3">
                <label style={{ fontSize: '14px' }} className="form-lable">
                  Patient Name: 
                </label>
                <div>{firstName} {lastName}</div>
              </div>
            </div>
            <div className="mb-3">
              <button
                style={{
                  width: '100px',
                  height: '40px',
                  fontSize: '16px',
                }}
                type="submit"
                onClick={handleClick}
                className="btn btn-primary text-white btn-lg"
              >
                View Reports
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Display Reports */}
      <div>
  {reports.length > 0 ? (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Type</th>
          <th>File</th>
        </tr>
      </thead>
      <tbody>
        {reports.map((report) => (
          <tr key={report._id}>
      
          
            <td>{report.title}</td>
            <td>{report.type === '01' ? <p>Blood Report</p>: report.type === '02' ?<p>Heart Report</p>: <p>BP Report</p>}</td>
            <td>
            <button className='btn btn-primary' onClick={() => setSelectedFile(report.file)}>Select</button>
              </td>
            {/* {<td><button onClick={downloadReport(report.file)}>Download</button></td>} */}
            {/* <td>
              <a
                href={report.file} 
                download={report.title} 
              >
                Download
              </a>
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>Click View Button</p>
  )}
</div>
 <div>
        {selectedFile && (
          <div>
            <p>Selected File: {selectedFile}</p>
            <button className='btn btn-danger' onClick={downloadReport}>Download Selected File</button>
          </div>
        )}
      </div>
    </main>
  );
}

export default PatientDiagnosis_PV;
