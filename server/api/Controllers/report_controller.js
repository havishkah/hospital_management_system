const mongoose = require("mongoose");
const Report = require("../models/reports");
const paths = require("path");
const fs = require("fs");

const {
  verifyInputs,
  validateInputs,
} = require("../../utilities/data_validation");

const createReport = (req, res, next) => {
  const { patientid, title, type } = req.body;
  const filename = req.file.filename
  const path = req.file.path

  if (!req.file.path) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const report = new Report({
    patientid,
    title,
    type,
    file:filename,
    path: path
  });
  return report.save().then(() => {
    res.status(200).json("Report Saved Successfully");
  });
};

const getReopts = (req, res, next) => {
  const { file }= req.body;
  const Path = paths.resolve(
    __dirname,
    `../../uploads/reports/${file}`
  );

  fs.readFile(Path, function (err, data) {
    if (err) {
      next(err);
    } else {
      res.writeHead(200, { ContentType: "image/jpg" });
      res.end(data);
    }
  });
};

const getAllReoprts = async (req, res) => {
  const report = await Report.find({}).sort({ createdAt: -1 });
  res.status(200).json(report);
};

const getByPaitent = async (req, res) => {
  const { patientid } = req.params;

  try {
    const report = await Report.find({ patientid: patientid });

    if (!report) {
      return res.status(404).json({ error: "No such Report found" });
    }

    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: "internal Server error" });
  }
};

const deleteRepotsByid = async (req, res) => {
  try {
    const id = req.params.id;
    const report = await Report.findByIdAndDelete(id);

    if (!report) {
      return res.status(404).json({ message: "File not found" });
    }

    res.json({ message: "File deleted successfully" });
  } catch (error) {
    console.error("Error deleting file:", error);
    res.status(500).json({ message: "Error deleting file" });
  }
};

const updateaReportbyID = (req, res) => {
  const id = req.params.id;
  console.log(req.params);
  const data = req.body;
  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return res.status(404).json({ error: "No such doctor" });
  // }
  const report = Report.findOneAndUpdate(
    { _id: id },
    {
      specialist: data.specialist,
      ward: data.ward,
      catagory: data.catagory,
      description: data.description,
      status: data.status,
    }
  );
  report
    .then((data) => {
      console.log(data);
      if (!data) {
        return res.status(404).json({ error: "Unable to process" });
      }
      res.status(201).json(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = {
  addReport: createReport,
  viewAllreports: getAllReoprts,
  viewPaitentReports: getByPaitent,
  removeReport: deleteRepotsByid,
  editReports: updateaReportbyID,
  getReopts,
  //reportRetrieve: reportRetrieve,
};
