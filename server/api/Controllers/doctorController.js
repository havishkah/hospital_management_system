const ApiError = require("../../utilities/Errors/errors");

const {
    createDoctor,
    getAlldoctors,
    deleteDoctorrByID,
    getDoctorByID

} = require('../services/doctor_services');

const createDoctor = async (req, res, next)=>{
    const data = req.body;

    if(
        !data.name||
        !data.nic||
        !data.contact||
        !data.email||
        !data
    ){

    }
    
    const newValues = {
        fulName: data.name,
        Nic: data.nic,
        email: data.email,
        contact: data.contact,
        
      };
    
      const response = createDoctor(newValues);
      response
        .then((data) => {
          if (!data) {
            next(ApiError.notCreated(`User not created.`));
            return;
          }
          res.status(200).send({ message: "User registered successfully!" });
        })
        .catch((err) => {
          next(err);
        });
};

const getAlldoctors = (req,res,next) =>{

}

const getDoctorByID = (req,res,next) =>{

}
const deleteDoctorrByID = (req,res,next) =>{

}

const updateDoctorbyID = (req,res,next) =>{

}