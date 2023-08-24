const mongoose = require('mongoose')
const Drug = require('../models/drugs');

const createaDrug = (req, res)=>{
  try {
    data = req.body
  
    let drugName = data.drugName;
    let type = data.type;
    let qty = data.qty;
    
  
    const drug = new Drug({
      drugName,
      type,
      qty,
     
    });
    return drug.save().then(()=>{
      res.json(200).json({error:'Adding new doctor failed'})
    })
  } catch (error) {
    res.status(500).json(error)
  }
}


const getAlldrugdetails = async(req,res)=>{
  const drug = await Drug.find({})
  res.status(200).json(drug)
}


const getDrug = async (req,res) =>{

 const { id }= req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such drug'})
    }

    const drug = await Drug.findbyid(id)

    if(!drug){
        return res.status(404).json({error:'No such drug'})
    }

    res.status(200).json(drug)    
   
  
};


const deleteDrugbyid = async (req,res) =>{
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error:'No such Drug details'})
  }

  const drug = await Doctor.findOneAndDelete({_id:id})

  if(!drug){
      return res.status(404).json({error:'No such Drug details'})
  }

  res.status(200).json(drug)  

}

const updateaDoctorbyID = async (req,res) =>{
  const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such drug'})
    }

    const drug = await Doctor.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if(!drug){
        return res.status(404).json({error:'No such rug'})
    }

    res.status(200).json(drug)

}

module.exports ={
  createDrug: createaDrug,
  getAlldrugs: getAlldrugdetails,
  deleteDrug: deleteDrugbyid,
  updatedrug: updateaDoctorbyID,
  getDrug: getDrug
}