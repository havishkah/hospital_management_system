const ApiError = require("../../utilities/Errors/errors");
const logger = require("../../utilities/logger");
const path = require("path");
const fs = require("fs");

const reportUpload = (req, res, next) => {
    try {
      logger.info(`Report uploaded. ${req.file.filename}`);
      return res.status(201).json({
        message: "report uploaded successfully",
      });
    } catch (error) {
      next(error);
    }
  };
  
  
  const reportRetrieve = (req, res, next) => {
    const nic = req.params.nic;
  
    const Path = path.resolve(
      __dirname,
      `../../documents/reports/${nic}.png`
    );
    const Path2 = path.resolve(
      __dirname,
      `../../documents/reports/${nic}.jpg`
    );
    const Path3 = path.resolve(
        __dirname,
        `../../documents/reports/${nic}.pdf`
      );
      const Path4 = path.resolve(
        __dirname,
        `../../documents/reports/${nic}.jpeg`
      );
  
    fs.readFile(Path, function (err, data) {
      if (err) {
        fs.readFile(Path2, function (err, data) {
          if (err) {
            next(err);
          } else {
            res.writeHead(200, { ContentType: "image/jpg" });
            res.end(data);
          }
        });
      } else {
        res.writeHead(200, { ContentType: "image/png" });
        res.end(data);
      }
    });
  };
  
  module.exports = {
    reportUpload: reportUpload,
    reportRetrieve: reportRetrieve,
    
  };
  