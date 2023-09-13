const mongoose = require("mongoose");
const Report = require("../models/reports");
const fs = require("fs");

const {
	verifyInputs,
	validateInputs,
} = require("../../utilities/data_validation");

const createReport = (req, res, next) => {
	const { nic, title, type } = req.body;

	if (!req.file.path) {
		return res.status(400).json({ message: "No file uploaded" });
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
		nic,
		title,
		type,
		file
	});
	return report.save().then(() => {
		res.status(200).json("Report Saved Successfully");
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

module.exports = {
  addReport: createReport,
  viewAllreports: getAllReoprts,
  viewPaitentReports: getByPaitent,
  removeReport: deleteRepotsByid,
  editReports: updateaReportbyID
  //reportRetrieve: reportRetrieve,
};
