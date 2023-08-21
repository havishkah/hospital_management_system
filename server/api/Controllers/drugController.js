const ApiError = require("../../utilities/Errors/errors");

const {
    createDrugs,
    getDrugs,
    getDrugByID,
    UpdateDoctorbyID,
    deleteDrugByID
} = require('../services/drugs_services');

const createaDrug = async (res,req,next) =>{

    const data = req.body;

    if(
        !data.drugname,
        !data.type,
        !data.qty,
        !data
    ){
        next(
            ApiError("required to fill all the fields")
        );
        return;
    }

    const newValues = {
        drugname:data.drugname,
        type:data.type,
        qty:data.qty
    };

    const response = createDrugs(newValues);
        response
            .then((data) => {
                if (!data) {
                  next(ApiError.notCreated(`Doctor is not created.`));
                  return;
                }
                res.status(200).send({ message: "User registered successfully!" });
              })
              .catch((err) => {
                next(err);
              });       
    
};

const getAllDrugs = (req,res,next) =>{
    const response = getDrugs();
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




module.exports ={
    createDrugs: createaDrug,
    getDrugs: getAllDrugs,
};