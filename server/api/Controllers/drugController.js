const mongoose = require("mongoose");
const Drug = require('../models/drugs');
const ApiError = require("../../utilities/Errors/errors");

const {
  verifyInputs,
  validateInputs,
} = require("../../utilities/data_validation")

const createDrug = (req, res, next) => {
  try {
    data = req.body;

    const verifiedResult = verifyInputs(
      ["drugName", "type", "qty","status"],

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
      ["drugName", "type", "qty","status"],

      data
    );
    if (validatedResult == false) {
      next(ApiError.badRequest("The request is missing required data."));

      return;
    }

    const drug = new Drug({

      drugName:data.drugName,
      type:data.type,
      qty:data.qty,
      status:data.status     

    });
    return drug.save().then(() => {
      res.json(200).json({ error: "Adding new drug failed" });
    }).catch((e) => {
       console.log(e)
       next(e)
    });
  } catch (error) {
    next(error)
  }
};

const getAlldrugdetails = async (req, res) => {
  const drug = await Drug.find({});
  res.status(200).json(drug);
};

const getDrug = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such drug" });
  }

  const drug = await Drug.findById(id);

  if (!drug) {
    return res.status(404).json({ error: "No such drug" });
  }

  res.status(200).json(drug);
};

const deleteDrugbyid = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Drug details" });
  }

  const drug = await Drug.findByIdAndDelete({ _id: id });

  if (!drug) {
    return res.status(404).json({ error: "No such Drug details" });
  }

  res.status(200).json(drug);
};

const updateaDrugbyID = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such drug" });
  }

  const drug = await Drug.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!drug) {
    return res.status(404).json({ error: "No such rug" });
  }

  res.status(200).json(drug);
};

module.exports = {
  createDrug: createDrug,
  getAlldrugs: getAlldrugdetails,
  deleteDrug: deleteDrugbyid,
  updatedrug: updateaDrugbyID,
  getDrug: getDrug,
};
