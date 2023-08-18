const Drug = require('../models/drugs');

const createDrugs = (data) =>{
    let drugName =data.drugName;
    let type = data.type;
    let qty = data.qty;

    const drugs = new Drugs( {
        drugName,
        type,
        qty
    });

    return Drugs.save();

}

const getDrugs =() =>{
    return Drug.find();
}

const deleteDrugByID = (drugId) => {
    let id = drugId;
    return Drug.deleteOne({ _id: id });
  };
  
  const getDrugByID = (iD) => {
    const DrugID = iD.trim();
    return Drug.findOne({ _id: DrugID });
  }
  
  const UpdateDoctorbyID = (id) => {
    const DrugID = id.trim();
    
    return Doctor.findOneAndUpdate({_id:DrugID},{
      ...req.body
    })
  }

module.exports = {
    createDrugs,
    getDrugs,
    deleteDrugByID,
    getDrugByID,
    UpdateDoctorbyID
  };