
const mongoose = require('mongoose');
const Prescription = require('mongoose');
const ApiError = require("../../utilities/Errors/errors");
const {
    verifyInputs,
    validateInputs,
  } = require("../../utilities/data_validation");

  const createPrescription = (req, res)=> {
    try {
        data = req.body;
  
        const verifiedResult = verifyInputs(
    
          [
    
            "doctorid",
            "patientid",
            "diagnosis",
            "frequency",
            "dosage",
            "qty"
          ],
    
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
    
          [
            "doctorid",
            "patientid",
            "diagnosis",
            "frequency",
            "dosage",
            "qty"
          ],
    
          data
    
        );
    
        if (validatedResult == false) {
    
          next(ApiError.badRequest("The request is missing required data."));
    
          return;
    
        }
  
      const prescription = new Prescription({
        doctorid: data.doctorid,
        patientid: data.patientid,
        diagnosis: data.diagnosis,
        frequency: data.frequency,
        dosage: data.dosage,
        qty : data.qty
      });
      return prescription.save().then(() => {
        res.json(200);});
    } catch (error) {
        res.status(500).json(error)
    }
  }

  const getAllprescriptionsdetails = async (req, res) => {
    const prescription = await Patient.find({});
    res.status(200).json(patient);
  };

  const getPrescriptionbyid = async (req,res) =>{
    const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such prescription" });
  }

  const prescription = await Prescription.findById(id);

  if (!prescription) {
    return res.status(404).json({ error: "No such prescription" });
  }

  res.status(200).json(prescription);
  }

  const getAllprescriptionsbypatient = async (req, res) => {
     const { patientid } = req.params;

    try{
      const prescription = await Prescription.find({ patientid: patientid});
  
      if(!prescription){
        return res.status(404).json({error : "no prescriptions found"});
      }
  
      res.status(200).json(prescription);
    }catch(err){
      res.status(500).json({err: "Internal Server Error"})
    }
  };


  module.exports ={
    addPrescription: createPrescription 
  }
  
