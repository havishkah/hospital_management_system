import { useState,useEffect } from "react"
import { useSignup } from "../../hooks/useSignup"
import { useParams } from "react-router-dom"
import Service from "../../../utilities/http"

export const AddDoctorAccout = () => {
    const [username, setUsername] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, isLoading, error} = useSignup()
    const role = "Doctor"
    const service = new Service
    const {id} = useParams();
    
  
    // const data = {
    //   firstName:firstName,
    //   lastName:lastName,
    //   initials:initials,
    //   Dob:dob,
    //   Gender:gender,
    //   email:email,
    //   nic:nic,
    //   contact:contact,
    //   specialist:specialist,
    //   ward:ward
    // }
  
    //loading existing data to form
    useEffect(() =>{
      loadDoctor();
      
    },[])
  
  function loadDoctor(){
      const respone =  service.get(`doctor/${id}`)
      respone.then((res) =>{
        console.log(res.data)
        setEmail(res.data.email);
        setContact(res.data.contact);
        setUsername(res.data.username);
        setPassword(res.data.password)
    }).catch((err) =>{
        alert(err);
    })
  }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(username,email,contact,password, role)
    }

    return(
        <main className="main-container">
        <div className="row">
            <div className="col-md-12 w-50 m-auto">
            <h5 className="mt-2"><i className="fa fa-user-plus"> </i> Add Doctor Account</h5>
            <p className="mt-3" style={{color:'grey'}}>Basic Infromation</p>
            <form>
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label style={{fontSize:'14px'}} className="form-lable">Username</label>
                            <input type="text" name="username" className="form-control" value={username} onChange={(e) => {
                                setUsername(e.target.value);
                            }} />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label style={{fontSize:'14px'}} className="form-lable">Email</label>
                            <input type="email" name="email" className="form-control" value={email} onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label style={{fontSize:'14px'}}className="form-lable">Contact</label>
                            <input type="number" name="phone" className="form-control" value={contact} onChange={(e) => {
                                setContact(e.target.value);
                            }}/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label style={{fontSize:'14px'}} className="form-lable">Password</label>
                            <input type="password" name="address" className="form-control" value={password} onChange={(e) => {
                                setPassword(e.target.value);
                            }} />
                        </div>
                    </div>
                    
                    <div className="col-md-12">
                        <div className="mb-3">
                        <label className="form-lable"></label>
                            <button type="button" onClick={handleSubmit} className="btn btn-primary btn-lg">Submit</button>
                        </div>
                       
                    </div>
                            {error && <div className="error">{error}</div>}
                </div>
            </form>
            </div>
        </div>
    </main>

    )
}