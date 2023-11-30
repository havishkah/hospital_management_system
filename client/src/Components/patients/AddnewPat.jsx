import React, { useState, useEffect } from "react";
import Service from "../../../utilities/http";
import { useNavigate, Link } from "react-router-dom";

export const AddNewPatient = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
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
  const [AssignConsultant, setAssignConsultant] = useState("");
  const [AssignWard, setAssignWard] = useState("");
  const [WardBed, setWardBed] = useState("");
  const [BHTNo, setBHTNo] = useState("");
  const [Bed, setBed] = useState([]);
  const [bedcount, setBedCount] = useState(0)
  const Status = "Onboard";
  const bStatus = "Unoccupied";

  const service = new Service();

  const handleSubmit = async (e) => {
   
   
    e.preventDefault();

    const newPatient = {
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
      AssignConsultant: AssignConsultant,
      AssignWard: AssignWard,
      WardBed: WardBed,
      BHTNo: BHTNo,
      Status: Status,
    };
    console.log(newPatient);

    const respone = service.post("patient/add", newPatient);
    respone
      .then((res) => {
        alert("Patient Added");
        const  bedstatus={
          status:"Occupied"
        }
        const respone1 = service.put(`bed`, BHTNo, bedstatus);
        respone1
          .then((res) => {
            console.log(res.data);
            navigate("/allbed");
            alert("Bed Updated Successfully");
          })
          .catch((err) => {
            alert(err);
          });
        navigate("/allpatient");
      })
      .catch((error) => {
        alert("failed to add");
        console.log(error);
      });
  };

  useEffect(() => {
    getDoctors();
    getBeds();
  }, []);

  function getDoctors() {
    const respone = service.get("doctor/");
    respone
      .then((res) => {
        setDoctors(res.data);
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function getBeds() {
    const respone = service.get("bed/status", bStatus);
    respone
      .then((res) => {
        setBed(res.data);
        setBedCount(res.data.length)
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <main className="main-container">
      <div className="row">
        <div className="col-md-12">
          <h5 className="mt-2">Add Patients</h5>
          <p className="mt-3" style={{ color: "grey" }}>
            Demographic Infromation
          </p>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label style={{ fontSize: "14px" }} className="form-lable">
                    First name
                  </label>
                  <input
                    type="text"
                    name="fname"
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
                    name="lname"
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
                    name="date"
                    className="form-control"
                    value={dob}
                    onChange={(e) => {
                      setDob(e.target.value);
                    }}
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
                  <label style={{ fontSize: "14px" }} className="form-lable">
                    Gender
                  </label>
                  <select
                    className="form-control"
                    value={gender}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                    name="status"
                  >
                    <option value="">--Select Gender--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label style={{ fontSize: "14px" }} className="form-lable">
                    Age
                  </label>
                  <input
                    type="text"
                    name="age"
                    className="form-control"
                    value={age}
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label style={{ fontSize: "14px" }} className="form-lable">
                    UserName
                  </label>
                  <input
                    type="text"
                    name="user"
                    className="form-control"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
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
                    name="cont"
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
                    type="email"
                    name="email"
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
                    name="fewfe"
                    className="form-control"
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
                    name="emer"
                    className="form-control"
                    value={emergencycont}
                    onChange={(e) => {
                      setEmergencycont(e.target.value);
                    }}
                  />
                </div>
              </div>
              <p className="mt-3" style={{ color: "grey" }}>
                About Assign Infromation
              </p>
              <div className="col-md-6">
                <div className="mb-3">
                  <label style={{ fontSize: "14px" }} className="form-lable">
                    AssignConsultant
                  </label>
                  <select
                    className="form-control"
                    value={AssignConsultant}
                    onChange={(e) => {
                      setAssignConsultant(e.target.value);
                    }}
                  >
                    <option> --select Consultant -- </option>
                    {doctors.map((doctor) => (
                      <option key={doctor._id} value={doctor._id}>
                        {doctor.firstName} {doctor.lastName}
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
                    value={AssignWard}
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
                    BHTNo <b>{"(Available bed Count "+ bedcount+")"}</b>
                  </label>
                  <select
                    className="form-control"
                    value={BHTNo}
                    onChange={(e) => {
                      setBHTNo(e.target.value);
                    }}
                  >
                    <option> --select Consultant -- </option>
                    {Bed && Bed.map((bed) => (
                      <option key={bed._id} value={bed._id}>
                        {bed.BedNo}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              

              <div className="col-md-6"></div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-lable"></label>
                  <Link
                    className="btn btn-primary bg-white text-primary btn-lg"
                    style={{ height: "40px", fontSize: "16px" }}
                    to="/admin"
                  >
                    Back
                  </Link>
                  &nbsp;
                  <button
                    type="submit"
                    style={{ height: "40px", fontSize: "16px" }}
                    className="btn btn-primary btn-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
