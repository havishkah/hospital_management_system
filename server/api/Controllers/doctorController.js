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
      next(
        ApiError.notFound(
          "User's name, nic, conact and email required"
        )
      );
      return;
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

const getAlldoctordetails = (req,res,next) =>{
  const response = getAlldoctors();
  response
  .then((data) => {
    if(!data){
      next(ApiError.notFound('Doctor Details not found'));
      return;
  }
  res.status(200).send({ data: data });

})
.catch((err) => {
  next(err);
});

};

const getDoctor = (req,res,next) =>{

  

}
const deleteDoctorr = (req,res,next) =>{
  const id = req.params.id;
  if (!id) {
    next(ApiError.notFound("Doctor ID required"));
    return;
  }

  const response = deleteDoctorrByID(id);
  response
    .then((data) =>{
      if(!data.acknowledged==true){
        next(ApiError.notFound(`Doctor details not found`));
        return;
      }
      if(data.deletedCout == 0){
        res.status(200).send({message:"User already deleted!"});
        return;
      }
    })
    .catch((err)=>{
      next(err);
    })
}

const updateDoctorbyID = (req,res,next) =>{

}

module.exports ={
  createDoctor: createDoctor,
  getAlldoctors: getAlldoctordetails,
  deleteDoctor: deleteDoctorr,
  updatedoctor: updateDoctorbyID
}