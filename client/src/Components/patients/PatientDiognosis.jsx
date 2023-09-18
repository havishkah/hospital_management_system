
import React, { useState, useEffect } from 'react';
import Service from '../../../utilities/http';
import { useNavigate } from 'react-router-dom';

function PatientDiagnosis() {
  const service = new Service();
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [patientid, setPatientid] = useState('');
  const [reports, setReports] = useState([]);

  useEffect(() => {
    getPatients();
  }, []);

  function getPatients() {
    const response = service.get('patient');
    response
      .then((res) => {
        console.log(res.data);
        setPatients(res.data);
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
        console.log(res.data);
        setReports(res.data);
      })
      .catch((error) => {
        console.error('Error fetching reports:', error);
      });
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
                  Patient Name
                </label>
                <select
                  className="form-control"
                  name="patientid"
                  value={patientid}
                  onChange={(e) => {
                    setPatientid(e.target.value);
                  }}
                >
                  <option> --select Patient -- </option>
                  {patients.map((patient) => (
                    <option key={patient._id} value={patient._id}>
                      {patient.firstName} {patient.lastName}
                    </option>
                  ))}
                </select>
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
                Submit
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
          <tr key={report.id}>
            <td>{report.title}</td>
            <td>{report.type}</td>
            <td>{report.file}</td>
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
    <p>No reports available for the selected patient.</p>
  )}
</div>

    </main>
  );
}

export default PatientDiagnosis;
