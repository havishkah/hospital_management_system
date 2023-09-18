const mongoose = require("mongoose");
const ApiError = require('../../utilities/Errors/errors')
const {
  verifyInputs,
  validateInputs,
} = require("../../utilities/data_validation");
const Bed = require("../models/beds");

const createabed = (req, res) =>{
    try {
        data = req.body;
  
        const verifiedResult = verifyInputs(
    
          [
           "status",
           "catagory",
           "description",
           "specialist",
           "ward"
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
            "status",
           "catagory",
           "description",
           "specialist",
           "ward"
          ],
    
          data
    
        );
        if (validatedResult == false) {

          next(ApiError.badRequest("The request is missing required data."));
    
          return;
    
        }

        const bed = new Bed({
            status:data.status,
            catagory:data.catagory,
            description:data.description,
            specialist:data.specialist,
            ward:data.ward
        });

        return bed.save().then(()=>{
            res.status(200).json('record added successfully');
        })

    } catch (error) {
        res.status(500).json(error);
        
    }
};

const getAllbeds = async (req,res) =>{
    const bed = await Bed.find({});
    res.status(200).json(bed);
};

const getBedbyID = async (req,res) => {
  const { id } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error : "No bed Available"});
  }

  const bed = await Bed.findById(id);

  if(!bed){
    return res.status(404).json({ error : "No bed Available"});
    
  }

  res.status(200).json(bed);
};

const filterbed = async (req, res) => {
  const { status } = req.params;
 
 try {
  const bed = await Bed.find({status:status});

  if(!bed){
    return res.status(404).json({error: "beds are not found"})
  }
  res.status(200).json(bed);

 } catch (error) {
  return res.status(500).json(error)
 }

}

const updateaBedbyID = (req, res) => {
  const id = req.params.id;

  console.log(req.params);
  const data = req.body;
 
  const bed = Bed.findOneAndUpdate(
    { _id: id },
    {    
        specialist: data.specialist,
        ward:data.ward,
        catagory:data.catagory,
        description:data.description,
        status:data.status
        
      }
   
  );

  bed.then((data) => {
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

const deletebed = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Doctor details" });
  }

  const bed = await Bed.findByIdAndDelete({ _id: id });

  if (!bed) {
    return res.status(404).json({ error: "No such Doctor details" });
  }

  res.status(200).json("Bed deleted");
};




module.exports = {
    createBed: createabed,
    getAllbedsdetails: getAllbeds,
    getBedbyid : getBedbyID,
    getBedbyStatus: filterbed,
    updateBed: updateaBedbyID,
    deleteBedbyId: deletebed
}
