const ApiError = require("../../utilities/Errors/errors");
const logger = require("../../utilities/logger");
const path = require("path");
const Report = require("../models/reports");
const fs = require("fs");

const {
  verifyInputs,
  validateInputs,
} = require("../../utilities/data_validation");

const reportUpload = (req, res, next) => {
  try {
    logger.info(`Report uploaded. ${(req.file.filename, req.file.path)}`);
    return res.status(201).json({
      message: "report uploaded successfully",
    });
  } catch (error) {
    next(error);
  }
};

const createReport = (req, res, next) => {
  const data = req.body;

  reportUpload()

  const verifiedResult = verifyInputs(
    ["title", "type", "file", "patientid", "doctorid"],
    data
  );

  if (verifiedResult == false) {
    next(
      ApiError.badRequest(
        "The request parameters are not properly formatted or are missing required fields."
      )
    );
    return;
  }

  const validatedResult = validateInputs(
    ["title", "type", "file", "patientid", "doctorid"],
    data
  );

  if (validatedResult == false) {
    next(ApiError.badRequest("The request is missing required data."));
    return;
  }

  const report = new Report({
    title: data.title,
    type: data.type,
    file: data.file,
    patientid: data.patientid,
    doctorid: data.doctorid,
  });
  return report.save().then(() => {
    res.json(200);
  });
};

const reportRetrieve = (req, res, next) => {
  const nic = req.params.nic;

  const Path = path.resolve(__dirname, `../../documents/reports/${nic}.png`);
  const Path2 = path.resolve(__dirname, `../../documents/reports/${nic}.jpg`);
  const Path3 = path.resolve(__dirname, `../../documents/reports/${nic}.pdf`);
  const Path4 = path.resolve(__dirname, `../../documents/reports/${nic}.jpeg`);

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
  addReport: createReport,
  reportUpload: reportUpload,
  reportRetrieve: reportRetrieve,
};
