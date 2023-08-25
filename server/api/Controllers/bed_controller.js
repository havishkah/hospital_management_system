const mongoose = require("mongoose");
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
           "catagory"
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
           "catagory"
          ],
    
          data
    
        );
        if (validatedResult == false) {

          next(ApiError.badRequest("The request is missing required data."));
    
          return;
    
        }

        const bed = new Bed({
            status:data.status,
            catagory:data.catagory
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
    deleteBedbyId: deletebed
}
