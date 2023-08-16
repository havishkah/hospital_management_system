const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "documents/profile_images");
  },
  filename: function (req, file, cb) {
      let nic = req.params.nic;
      let ext = path.extname(file.originalname);
      let fileName = nic.trim();
    cb(null, fileName + ext);
  },
});

var upload = multer({
  storage: storage,
  limits: {
    fileSize: 5000000,
  },
  fileFilter: function (req, file, callback) {
    if (!file.originalname.match(/\.(pdf|png|jpg)$/)) {
      return callback(new Error("FileFormatError"));
    }
    callback(undefined, true);
  },
});

module.exports = upload;