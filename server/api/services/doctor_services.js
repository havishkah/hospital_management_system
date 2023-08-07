const Doctor = require('../models/doctor')

const createDoctor = (data) => {
    let name = data.fullName;
    let nic = data.nic;
    let email = data.email;
    let contact = data.phone;
  
    const user = new User({
      fullName: name,
      email: email,
      nic:nic,
      phone: contact,
     
    });
    return user.save();
  };

const getAlldoctors = () =>{
  return Doctor.find();
};

const deleteDoctorrByID = (docId) => {
  let id = docId;
  return Doctor.deleteOne({ _id: id });
};

const getDoctorByID = (id) => {
  const DoctorID = id.trim();
  return Doctor.findOne({ _id: DoctorID });
}



  // module.exports = {
  //   createDoctor,
  //   getAlldoctors,
  //   deleteDoctorrByID,
  //   getDoctorByID
  // };