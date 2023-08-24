const mongoose = require("mongoose");
const Patient = require("../models/beds");
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

module.exports = {
    createBed: createabed,
}
