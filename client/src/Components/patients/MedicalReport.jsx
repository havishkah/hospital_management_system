import React, { useState } from "react";
import Service from "../../../utilities/http";
import { useNavigate } from "react-router-dom";

export const MedicalReport = () => {
	const navigate = useNavigate();
	//const [name, setName] = useState('');
	const [nic, setNIC] = useState("");
	const [title, setTitle] = useState("");
	const [type, setType] = useState("");
	const [file, setFile] = useState("");
	const service = new Service();

	function handleFile(event) {
		setFile(event.target.files[0]);
		console.log(event.target.files[0]);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		// const formData = new FormData();
		// //formData.append('name', name);
		// formData.append("nic", nic);
		// formData.append("title", title);
		// formData.append("type", type);
		// formData.append("file", file);

        const newMed = {
            nic: nic,
            title: title,
            type: type,
            file: file,
        }

		try {
			console.log("data",newMed);
			const response = await service.post("reports/", newMed);
			console.log(response);
			alert("Medical Report added Successfully");
			navigate("/admin");
		} catch (error) {
			console.error("Error with adding data:", error);
		}
	};

	return (
		<main className="main-container">
			<div className="main-title">
				<h4>MEDICAL REPORT</h4>
			</div>

			<form onSubmit={handleSubmit} encType="multipart/form-data">
				<div className="row">
					<p className="mt-3" style={{ color: "grey" }}>
						Patient Information
					</p>
					{/* <div className="col-md-6">
                        <div className="mb-3">
                            <label style={{ fontSize: '14px' }} className="form-lable">Name</label>
                            <input type="text" name="name" className="form-control" onChange={(e) => {
                                setName(e.target.value);
                            }} />
                        </div>
                    </div> */}
					<div className="col-md-6">
						<div className="mb-3">
							<label
								style={{ fontSize: "14px" }}
								className="form-lable">
								NIC
							</label>
							<input
								type="text"
								name="nic"
								className="form-control"
								onChange={(e) => {
									setNIC(e.target.value);
								}}
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="mb-3">
							<label
								style={{ fontSize: "14px" }}
								className="form-lable">
								Report Type
							</label>
							<select
								className="form-control"
								name="type"
								onChange={(e) => {
									setType(e.target.value);
								}}>
								<option value="">
									--Select Report Type--
								</option>
								<option value="01">Blood Report</option>
								<option value="02">Heart Report</option>
								<option value="03">BP Report</option>
							</select>
						</div>
					</div>
					<div className="col-md-6">
						<div className="mb-3">
							<label
								style={{ fontSize: "14px" }}
								className="form-lable">
								Report Title
							</label>
							<input
								type="text"
								name="title"
								className="form-control"
								onChange={(e) => {
									setTitle(e.target.value);
								}}
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="mb-6">
							<label
								style={{ fontSize: "14px" }}
								className="form-lable">
								Choose Report
							</label>
							<input
								type="file"
								name="file"
								className="form-control"
								onChange={handleFile}
								accept=".pdf,.doc,.docx"
							/>
						</div>
					</div>
					<div className="col-md-6"></div>
					<div className="col-md-6"></div>
					<div className="col-md-6">
						<div className="mb-3">
							<button
								style={{
									marginLeft: "280px",
									width: "100px",
									height: "40px",
									fontSize: "16px",
								}}
								type="button"
								className="btn btn-primary bg-white text-primary btn-lg">
								Back
							</button>
							&nbsp;
							<button
								style={{
									width: "100px",
									height: "40px",
									fontSize: "16px",
								}}
								type="submit"
								className="btn btn-primary text-white btn-lg">
								Upload
							</button>
						</div>
					</div>
				</div>
			</form>
		</main>
	);
};
