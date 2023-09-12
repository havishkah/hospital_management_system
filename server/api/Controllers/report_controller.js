const mongoose = require('mongoose')
const Report = require("../models/reports");
const fs = require("fs");

const {
  verifyInputs,
  validateInputs,
} = require("../../utilities/data_validation");


const createReport = (req, res, next) => {
  const { title, type, patientid,doctorid} = req.body;
  
  
   if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
   }

  const originalname = req.file.originalname;
  const file = `documents/${req.file.filename}`;

  // const verifiedResult = verifyInputs(
  //   ["title", "type", "file", "patientid", "doctorid"],
       // data
  // );

  // if (verifiedResult == false) {
  //   next(
  //     ApiError.badRequest(
  //       "The request parameters are not properly formatted or are missing required fields."
  //     )
  //   );
  //   return;
  // }

  // const validatedResult = validateInputs(
  //   ["title", "type", "file", "patientid", "doctorid"],
  // );

  // if (validatedResult == false) {
  //   next(ApiError.badRequest("The request is missing required data."));
  //   return;
  // }

  const report = new Report({
    title ,
    type ,
    file,
    patientid,
    doctorid,
  });
  return report.save().then(() => {
    res.status(200).json("Report Saved Successfully");
  });
};

const getAllReoprts = async (req,res) =>{
  const report = await Report.find({}).sort({createdAt: -1});
  res.status(200).json(report);
};

const getByPaitent = async (req, res) => {
  const { patientid } = req.params;

  try {
    const report = await Report.find({patientid:patientid})

    if(!report){
      return res.status(404).json({error: "No such Report found"})
    }

    res.status(200).json(report)
  } catch (error) {
    res.status(500).json({error: "internal Server error"})
  }

};

const deleteRepotsByid = async (req,res) => {
  try {
    const id = req.params.id;
    const report = await Report.findByIdAndDelete(id);

    if (!report) {
      return res.status(404).json({ message: 'File not found' });
    }

    res.json({ message: 'File deleted successfully' });
  } catch (error) {
    console.error('Error deleting file:', error);
    res.status(500).json({ message: 'Error deleting file' });
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
        ward:data.ward,
        catagory:data.catagory,
        description:data.description,
        status:data.status
        
      }
   
  );

  report.then((data) => {
    console.log(data);
    if (!data) {
      return res.status(404).json({ error: "Unable to process" });
    }
    
    res.status(201).json(data);
  })
  .catch((error) => {
    console.log(error.message)
  })

};


module.exports = {
  addReport: createReport,
  viewAllreports: getAllReoprts,
  viewPaitentReports: getByPaitent,
  removeReport: deleteRepotsByid,
  editReports: updateaReportbyID
  //reportRetrieve: reportRetrieve,
};
