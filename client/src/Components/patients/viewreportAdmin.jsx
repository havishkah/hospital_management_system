import { useEffect, useState } from "react"
import Service from "../../../utilities/http"
import { useParams } from "react-router-dom"

export const ViewReoprt = () =>{

    const id = useParams()
    const service = new Service()
    const [file, setFile] = useState('')


    useEffect(() =>{
        getReport()
        viewFile()
    },[]);

    const getReport = () =>{
        const respone =  service.get(`reports/${id}`) 
        respone.then((res) => {
          console.log (res.data)
          setFile(res.data.file);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    } 

    const viewFile = () =>{
        const respone = service.post(`reports/download`, file )


    }

    return(
        <div>

        </div>
    )
}