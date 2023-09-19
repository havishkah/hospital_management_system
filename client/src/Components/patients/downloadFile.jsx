import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FileDownload() {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    // Fetch a list of available files from the server
    axios.get('http://localhost:4000/api/reports')
      .then((response) => {
        setFiles(response.data);
      })
      .catch((error) => {
        console.error('Error fetching files:', error);
      });
  }, []);

  const handleDownload = () => {
    if (!selectedFile) {
      alert('Please select a file to download.');
      return;
    }

    // Make a POST request to download the selected file
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
  };

  return (
    <div>
      <h2>File Download</h2>
      <table>
        <thead>
          <tr>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file._id}>
              <td>{file.title}</td>
              <td>
                <button className="btn btn-primary" onClick={() => setSelectedFile(file.file)}>Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {selectedFile && (
          <div>
            <p>Selected File: {selectedFile}</p>
            <button onClick={handleDownload}>Download Selected File</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FileDownload;