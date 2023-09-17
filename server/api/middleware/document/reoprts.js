// const multer = require("multer");
// const { v4: uuid} = require("uuid");
// const path = require("path");

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "documents/reports");
//   },
//   filename: function (req, file, cb) {
//       let nic = req.params.nic;
//       let ext = path.extname(file.originalname);
//       let fileName = nic.trim();
//     cb(null, fileName + ext);
//   },
// });

// var upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 5000000,
//   },
//   fileFilter: function (req, file, callback) {
//     if (!file.originalname.match(/\.(pdf|png|jpg|jpeg|PNG)$/)) {
//       return callback(new Error("FileFormatError"));
//     }
//     callback(undefined, true);
//   },
// });

// module.exports = upload;
const multer = require('multer');
const path = require('path');

// Define storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    
    cb(null, 'uploads/reports/');
  },
  filename: (req, file, cb) => {
    // Generate a unique file name based on the current timestamp
    const timestamp = Date.now();
    const extension = path.extname(file.originalname);
    const uniqueFilename = `${timestamp}${extension}`;
    cb(null, uniqueFilename);
  },
});

// Define a function to filter allowed file types
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['.pdf', '.jpg', '.jpeg', '.png'];
  const fileExtension = path.extname(file.originalname);

  if (allowedFileTypes.includes(fileExtension.toLowerCase())) {
    // Accept the file if its extension is in the allowed list
    cb(null, true);
  } else {
    // Reject the file if its extension is not allowed
    cb(new Error('Invalid file type'));
  }
};

// Configure multer with the storage and file filter settings
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

// Export the middleware for handling single file uploads
module.exports = upload;
