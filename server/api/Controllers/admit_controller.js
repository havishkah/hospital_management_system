const mongoose = require("mongoose");
const {
  verifyInputs,
  validateInputs,
} = require("../../utilities/data_validation");

const Admit = require("../models/admit");

const createAdmit = (req, res) => {
  try {
    const data = req.body;

    const verifiedResult = verifyInputs(
      ["docName", "status", "bht", "specialist", "ward", "bed", "diagnosis"],

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
      ["docName", "status", "bht", "specialist", "ward", "bed", "diagnosis"],

      data
    );
    if (validatedResult == false) {
      next(ApiError.badRequest("The request is missing required data."));

      return;
    }

    const admit = new Admit({
      patientid: data.patientid,
      docName:data.docName,
      status: data.status,
      bht: data.bht,
      bed: data.bed,
      specialist: data.specialist,
      ward: data.ward,
      diagnosis: data.diagnosis,
    });

    admit.then((data) => {
      console.log(data);
      if (!data) {
        return res.status(404).json({ error: "Unable to process" });
      }
      
      res.status(201).json(data);
    })
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAlladmits = async (req, res) =>{
  const admit = await Admit.find({});
  res.status(200).json(admit);
}

const getAdmitsbyID = async (req,res) => {
  const { id } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error : "No bed Available"});
  }

  const admit = await Admit.findById(id);

  if(!admit){
    return res.status(404).json({ error : "No bed Available"});
  }

  res.status(200).json(admit);
};

const deleteAdmit = async (req, res) => {
  const id = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Doctor details" });
  }

  const admit = await Admit.findByIdAndDelete({ _id: id });

  if (!admit) {
    return res.status(404).json({ error: "No such Doctor details" });
  }

  res.status(200).json(admit);
};

const viewAdmitsbystatus = async (req,res) =>{
  const status = req.body

  const admit = await Admit.find({status: status});
  res.status(200).json(admit);

  if (!admit) {
    return res.status(404).json({ error: "no prescriptions found" });
  }

}

const updateaAdmitbyID = (req, res) => {
  const id = req.params.id;

  console.log(req.params);
  const data = req.body;
  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return res.status(404).json({ error: "No such doctor" });
  // }


  const admit = Admit.findOneAndUpdate(
    { _id: id },
    {
      docName:data.docName,
      status: data.status,
      bht: data.bht,
      bed: data.bed,
      specialist: data.specialist,
      ward: data.ward,
      diagnosis: data.diagnosis,
    }
   
  );

  admit.then((data) => {
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
  admitapatient: createAdmit,
  viewAdmits: getAlladmits,
  getAdmit: getAdmitsbyID,
  removeAdmit: deleteAdmit,
  updateAdmit: updateaAdmitbyID
}
