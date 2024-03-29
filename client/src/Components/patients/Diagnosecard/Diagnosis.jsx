import { useState, useEffect } from "react";

import { IoIosRemoveCircle } from "react-icons/io";
export const AddnewDiagnosis = () => {

    const [selectedValue, setSelectedValue] = useState("");
    const [yourArray, setYourArray] = useState([]);
    const [selectHide,setSelectHide] = useState("Show");

    
    const handleHide=(e)=>{
        e.preventDefault()

        if(selectHide==="Show"){
            setSelectHide("Hide")
            console.log
        }else{
            setSelectHide("Show")
        }
    }


    const handleSelectChange = (e) => {
        const newValue = e.target.value;
        setSelectedValue(newValue);
        setYourArray([...yourArray, newValue]); // Add the new value to the array
    };
    const handleRemoveValue = (valueToRemove) => {
        const newArray = yourArray.filter((value) => value !== valueToRemove);
        setYourArray(newArray);
      };

      const handleInputChange = (index, newValue) => {
        const newArray = [...yourArray];
        newArray[index] = newValue;
        setYourArray(newArray);
      };

    return (
        <div>
           <div className="row">
           {selectHide === 'Show' ? 
            <select value={selectedValue} onChange={handleSelectChange} className="form-control sele-op">
            <option value="Inferior STEMI">Inferior STEMI</option>
            <option value="Anterior STEMI">Anterior STEMI</option>
            <option value="posterior STEMI">posterior STEMI</option>
            <option value="NSTEMI">NSTEMI</option>
            <option value="Heart Failure">Heart Failure</option>
            <option value="Hypertension">Hypertension</option>
            <option value="Diabetes mellitus">Diabetes mellitus</option>
            <option value="Diabetes mellitus">Hyperlipidaemia</option>
        </select> :"" 
          }
            <button className="optn" onClick={handleHide}>Hide/Show</button>
           </div>
            <div>
        {yourArray.map((value, index) => (
          <div key={index} className="my-2">
            <input type="text" 
                value={value} 
                className="w-75 sele-op"
                onChange={(e) => handleInputChange(index, e.target.value)} />
            <button className="removebtn" onClick={() => handleRemoveValue(value)}><IoIosRemoveCircle/></button>
          </div>
        ))}
      </div>

        </div>
    )
}