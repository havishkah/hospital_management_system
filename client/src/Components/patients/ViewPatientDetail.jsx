import React, { useState, useEffect } from "react";
import Service from "../../../utilities/http";
import { useParams, useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";

function ViewPatientDetail() {
  const service = new Service();
  const navigate = useNavigate();
  const { id } = useParams();
  const role = Cookies.get("role");

  const [doctor, setDoctor] = useState([]);
  const [Bed, setBed] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [initials, setInitials] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [nic, setNic] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [emergencycont, setEmergencycont] = useState("");
  const [assignConsultant, setAssignConsultant] = useState("");
  const [assignWard, setAssignWard] = useState("");
  const [WardBed, setWardBed] = useState("");
  const [BHTNo, setBHTNo] = useState("");
  const [Status, setStatus] = useState("");
  const [bedid,setBedid] = useState("")
  const [bedNo,setBedNo] = useState("");
  const bStatus = "Unoccupied";

  //loading existing data to form
  useEffect(() => {
    loadPatient();
  }, []);

  function loadPatient() {
    const respone = service.get(`patient/${id}`);
    respone
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setInitials(res.data.initials);
        setDob(res.data.Dob);
        setGender(res.data.Gender);
        setAge(res.data.Age);
        setNic(res.data.nic);
        setEmail(res.data.email);
        setAddress(res.data.address);
        setContact(res.data.contact);
        setEmergencycont(res.data.emergencycont);
        setAssignConsultant(res.data.AssignConsultant);
        setAssignWard(res.data.AssignWard);
        setWardBed(res.data.WardBed);
        setBHTNo(res.data.BHTNo);
        setStatus(res.data.Status);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => {
    getDoctors();
    getBeds();
    loadBed()
  }, []);

  function loadBed() {
    const respone = service.get(`bed/${BHTNo}`);
    respone
      .then((res) => {
        console.log(res.data);
        setBedNo(res.data.BedNo);
        setBedid(res.data.id);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function getDoctors() {
    const respone = service.get("doctor");
    respone
      .then((res) => {
        console.log(res.data);
        setDoctor(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  //Discharge patient
  function dischargePatient() {
    const response = service.put("/patient/discharge", id);
    response
      .then(() => {
        const  bedstatus={
          status:"Occupied"
        }
        if(Status=="Onboard"){
          const respone1 = service.put(`bed`, BHTNo, bedstatus);
          respone1
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              alert(err);
            });
        }
        navtoDiagcard();
      })
      .catch((e) => {
        console.log(e);
        alert("activity failed!");
      });
  }

  //Delete patient
  function patientDelete() {
    const respose = service.delete(`patient`, id);
    respose
      .then(() => {
        alert("Are you confirm to remove patient??");
        const  bedstatus={
          status:"Occupied"
        }
        const respone1 = service.put(`bed`, BHTNo, bedstatus);
        respone1
          .then((res) => {
            console.log(res.data);
            
          })
          .catch((err) => {
            alert(err);
          });
        navigate("/allpatient");
      })
      .catch((err) => {
        alert(err);
      });
  }
  // Update patient
  const updatePatient = async (e) => {
    e.preventDefault();
    const updatePatient = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      initials: initials,
      Dob: dob,
      Gender: gender,
      Age: age,
      nic: nic,
      email: email,
      address: address,
      contact: contact,
      emergencycont: emergencycont,
      AssignConsultant: assignConsultant,
      AssignWard: assignWard,
      WardBed: WardBed,
      BHTNo: bedid,
      Status: Status,
    };
    const respose = service.put(`patient/patient`, id, updatePatient);
    respose
      .then((res) => {
        alert("Patient Details Updated");

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  function navtoDiagcard() {
    navigate(`/dignosiscard/${id}/${assignConsultant}/${BHTNo}`)
}


  function getBeds() {
    const respone = service.get("bed/status", bStatus);
    respone
      .then((res) => {
        setBed(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

   function navtoDiagcard() {
        navigate(`/dignosiscard/${id}/${assignConsultant}/${BHTNo}`)
  }

  return (
    <main className="main-container">
      <div className="row">
        <div className="col-md-12">
          <div
            style={{ justifyContent: "space-between", display: "flex" }}
            className="main-title mt-3"
          >
            <h5 className="mt-2">Patient {firstName}'s Details</h5>
            <div>
              {/* <button style={{marginLeft:'400px',height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Add Prescription</button> &nbsp;
                    <button style={{height:'40px', fontSize:'16px'}}type="submit" className="btn btn-primary text-white btn-lg">View Diagnosis</button> &nbsp;*/}

              
{
                  Status==="Discharged" ? <button
                  style={{
                    height: "40px",
                    fontSize: "16px",
                    marginRight: "10px",
                  }}
                  type="button"
                  onClick={dischargePatient}
                  className="btn btn-primary text-white btn-lg"
                >
                  Diagnosis Card
                </button> : 
                <button
                  style={{
                    height: "40px",
                    fontSize: "16px",
                    marginRight: "10px",
                  }}
                  type="button"
                  onClick={dischargePatient}
                  className="btn btn-primary text-white btn-lg"
                >
                  Discharge 
                </button>
                
                }
             

              <button
                style={{
                  height: "40px",
                  fontSize: "16px",
                  marginRight: "10px",
                }}
                type="button"
                onClick={updatePatient}
                className="btn btn-success text-white btn-lg"
              >
                Update
              </button>

              <button
                style={{ height: "40px", fontSize: "16px" }}
                type="button"
                onClick={patientDelete}
                className="btn btn-danger text-white btn-lg"
              >
                Delete
              </button>
            </div>
          </div>

          <p className="mt-3" style={{ color: "grey" }}>
            Basic Infromation
          </p>
          <form onSubmit={updatePatient}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label style={{ fontSize: "14px" }} className="form-lable">
                    First name
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label style={{ fontSize: "14px" }} className="form-lable">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label style={{ fontSize: "14px" }} className="form-lable">
                    Name with Initials
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    value={initials}
                    onChange={(e) => {
                      setInitials(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label style={{ fontSize: "14px" }} className="form-lable">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="address"
                    className="form-control"
                    value={dob}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label style={{ fontSize: "14px" }} className="form-lable">
                    Nic
                  </label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    value={nic}
                    onChange={(e) => {
                      setNic(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="mb-3">
                    <label style={{ fontSize: "14px" }} className="form-lable">
                      Gender
                    </label>
                    <select
                      className="form-control"
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                      name="status"
                      value={gender}
                    >
                      <option value="">--Select Gender--</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label style={{ fontSize: "14px" }} className="form-lable">
                    Age
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={age}
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                </div>
              </div>
              <p className="mt-3" style={{ color: "grey" }}>
                Contact Infromation
              </p>
              <div className="col-md-6">
                <div className="mb-3">
                  <label style={{ fontSize: "14px" }} className="form-lable">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={contact}
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label style={{ fontSize: "14px" }} className="form-lable">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label style={{ fontSize: "14px" }} className="form-lable">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    input
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label style={{ fontSize: "14px" }} className="form-lable">
                    Emergency Contact Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={emergencycont}
                    onChange={(e) => {
                      setEmergencycont(e.target.value);
                    }}
                  />
                </div>
              </div>
              <hr className="text-grey mt-4" />
              <p className="mt-3" style={{ color: "grey" }}>
                About Assign Infromation
              </p>
              <div className="col-md-6">
                <div className="mb-3">
                  <label style={{ fontSize: "14px" }} className="form-lable">
                    Assign Consultant
                  </label>
                  <select
                    className="form-control"
                    value={assignConsultant}
                    onChange={(e) => {
                      setAssignConsultant(e.target.value);
                    }}
                  >
                    <option> --select Consultant -- </option>
                    {doctor.map((bed) => (
                      <option key={bed._id} value={bed._id}>
                        {bed.firstName+" "+bed.lastName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label style={{ fontSize: "14px" }} className="form-lable">
                    AssignWard
                  </label>

                  <select
                    className="form-control"
                    name="status"
                    value={assignWard}
                    onChange={(e) => {
                      setAssignWard(e.target.value);
                    }}
                  >
                    <option value="">--Select Assigned Ward--</option>
                    <option value="Cardiology Ward 01">
                      Cardiology Ward 01
                    </option>
                    <option value="Cardiology Ward 02">
                      Cardiology Ward 02
                    </option>
                    <option value="Cardiology Ward 03">
                      Cardiology Ward 02
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label style={{ fontSize: "14px" }} className="form-lable">
                    Bed Category
                  </label>
                  <select
                    className="form-control"
                    value={WardBed}
                    name="status"
                    onChange={(e) => {
                      setWardBed(e.target.value);
                    }}
                  >
                    <option value="">--Select Bed Category--</option>
                    <option value="Electric">Electric</option>
                    <option value="Semi-Electric">Semi-electric</option>
                    <option value="Manual">Manual</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label style={{ fontSize: "14px" }} className="form-lable">
                    BHTNo
                  </label>
                  <select
                    className="form-control"
                    value={bedid}
                    onChange={(e) => {
                      setBedid(e.target.value);
                    }}
                  >
                    <option value={BHTNo}> {bedNo} </option>
                    {Bed.map((bed) => (
                      <option key={bed._id} value={bed._id}>
                        {bed.BedNo}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label style={{ fontSize: "14px" }} className="form-lable">
                    Status:
                  </label>
                  <select
                    className="form-control"
                    value={Status}
                    disabled
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  >
                    <option value={Status}> {Status} </option>
                    <option value="Onboard"> Onboard </option>
                    <option value="Discharge"> Discharge </option>
                    
                      
                  </select>
                </div>
              </div>

              <div className="col-md-6"></div>
            </div>
          </form>

          <hr className="text-grey mt-4 mb-7" />

          <button
            style={{
              height: "40px",
              fontSize: "16px",
              margin: "50px 30px 30px 0",
            }}
            type="button"
            onClick={() => navigate(`/addprescrip/${id}`)}
            className="btn btn-primary text-white btn-lg"
          >
            Add Medication
          </button>
          <button
            style={{
              height: "40px",
              fontSize: "16px",
              margin: "50px 30px 30px 0",
            }}
            type="button"
            onClick={() => navigate(`/viewprescripton/${id}`)}
            className="btn btn-primary text-white btn-lg"
          >
            View Medication
          </button>

          <button
            style={{
              height: "40px",
              fontSize: "16px",
              margin: "50px 30px 30px 0",
            }}
            type="button"
            onClick={() => navigate(`/adddiagnosis/${id}`)}
            className="btn btn-primary text-white btn-lg"
          >
            Add Diagnosis Report
          </button>

          <button
            style={{
              height: "40px",
              fontSize: "16px",
              margin: "50px 30px 30px 0",
            }}
            type="button"
            onClick={() => navigate(`/diagnosisHistory/${id}`)}
            className="btn btn-primary text-white btn-lg"
          >
            View Diagnosis History
          </button>
        </div>
      </div>
    </main>
  );
}

//test
export default ViewPatientDetail;
