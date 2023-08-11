const Doctor = require('../models/doctor')

const createDoctor = (data) => {
    let name = data.fullName;
    let nic = data.nic;
    let email = data.email;
    let contact = data.phone;
  
    const doctor = new Doctor({
      fullName: name,
      email: email,
      nic:nic,
      phone: contact
     
    });
    return Doctor.save();
  };

const getAlldoctors = () =>{
  return Doctor.find();
};

const deleteDoctorrByID = (docId) => {
  let id = docId;
  return Doctor.deleteOne({ _id: id });
};

const getDoctorByID = (iD) => {
  const DoctorID = iD.trim();
  return Doctor.findOne({ _id: DoctorID });
}



   module.exports = {
    createDoctor,
    getAlldoctors,
    deleteDoctorrByID,
    getDoctorByID
  };