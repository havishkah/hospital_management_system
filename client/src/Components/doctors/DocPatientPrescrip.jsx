import React, { useState, useEffect } from "react";
import Service from "../../../utilities/http";
import { Link, useNavigate, useParams } from "react-router-dom";

export const DocPatientPrescrip = () => {
	const service = new Service();
	const navigate = useNavigate();
    const [patientid,setPatientid] = useState([]);
	const [drugs,setDrugs] = useState([]);
	const Param = useParams();
	const id = Param.id;


	//loading existing data to form
	useEffect(() => {
		loadPrescription();
		getDrugs();
       
	}, []);


	//view prescription details
	const [catagory, setCatagory] = useState("");
	const [dru, setDru] = useState("");
	const [diagnosis, setDiagnosis] = useState("");
	const [frequency, setFrequency] = useState("");
	const [dosage, setDosage] = useState("");
	const [qty, setQty] = useState("");

	function loadPrescription() {
		const respone = service.get(`/prescription/${id}`);
		respone
			.then((res) => {
				setCatagory(res.data.catagory);
				setDru(res.data.drug);
				setDiagnosis(res.data.diagnosis);
				setFrequency(res.data.frequency);
				setDosage(res.data.dosage);
				setQty(res.data.qty);
			})

			.catch((err) => {
				alert(err);
			});
	}

	const handleUpdatePrescription = () => {
		const updatedPrescriptionData = {
			catagory,
			dru,
			diagnosis,
			frequency,
			dosage,
			qty
		};

		service
			.put(`prescription` , id, updatedPrescriptionData)
			.then(() => {
				alert("Prescription updated successfully");
				navigate(`/`);
			})
			.catch((err) => {
				alert("Error updating prescription: " + err);
			});
	};

    //  //load drugs
	//   function getDrug(){
    //     const respone = service.get (`drugs/${dru}`)
    //     respone.then((res) => {
    //       console.log (res.data)
    //       setMedicine(res.data.drugName);
    //       console.log(medicine);
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching data:', error);
    //     });
    //   }

	 //load drugs
	  function getDrugs(){
	  const respone = service.get ('drugs/')
	  respone.then((res) => {
	    console.log (res.data)
	    setDrugs(res.data);
	  })
	  .catch((error) => {
	    console.error('Error fetching data:', error);
	  });
	}

	return (
		<main className="main-container">
			<div className="main-title">
				<h4>Patient's Prescription Details</h4>
			</div>
            <form>
				<div className="row">
			
					<p className="mt-3" style={{ color: "grey" }}>
						Prescription Infromation
					</p>
					<div className="col-md-6">
						<div className="mb-3">
							<label
								style={{ fontSize: "14px" }}
								className="form-lable">
								Category
							</label>
							<input
								type="text"
								name="address"
								className="form-control"
								value={catagory}
								onChange={(e) => {
									setCatagory(e.target.value);
								}}
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="mb-3">
							<label
								style={{ fontSize: "14px" }}
								className="form-lable">
								Drug Type
							</label>
                            {/* <input
								type="text"
								name="address"
								className="form-control"
								value={dru}
								onChange={(e) => {
									setDru(e.target.value);
								}}
							/> */}
							<select className="form-control" name="status" value={dru} onChange={(e) => {
                                        setDru(e.target.value);
                                    }}>
                                       <option value={dru}>{dru}</option>

                                       {drugs.map((drug) => (
                                            <option value={drug.drugName}>{drug.drugName}</option>
                                        ))}
                                   </select>
							
						</div>
					</div>
					<div className="col-md-6">
						<div className="mb-3">
							<label
								style={{ fontSize: "14px" }}
								className="form-lable">
								Diagnosis
							</label>
							<textarea
								rows="4"
								cols="50"
								type="text"
								name="address"
								className="form-control"
								value={diagnosis}
								onChange={(e) => {
									setDiagnosis(e.target.value);
								}}
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="mb-3">
							<label
								style={{ fontSize: "14px" }}
								className="form-lable">
								Frequency
							</label>
							<textarea
								rows="4"
								cols="50"
								type="text"
								name="address"
								className="form-control"
								value={frequency}
								onChange={(e) => {
									setFrequency(e.target.value);
								}}
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="mb-3">
							<label
								style={{ fontSize: "14px" }}
								className="form-lable">
								Dosage
							</label>
							<input
								type="text"
								name="address"
								className="form-control"
								value={dosage}
								onChange={(e) => {
									setDosage(e.target.value);
								}}
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="mb-3">
							<label className="form-lable">Quantity</label>
							<input
								type="text"
								name="address"
								className="form-control"
								value={qty}
								onChange={(e) => {
									setQty(e.target.value);
								}}
							/>
						</div>
					</div>

					<div className="col-md-6"></div>

					<div className="col-md-6">
						<div className="mb-3">

						</div>
						<div className="mb-3">
							<button
								style={{
									marginLeft: "380px",
									width: "100px",
									height: "40px",
									fontSize: "16px",
								}}
								type="button"
								className="btn btn-primary bg-white text-primary btn-lg"
								onClick={handleUpdatePrescription}>
								Update
							</button>
						</div>
					</div>
				</div>
			</form>
		</main>
	);
};