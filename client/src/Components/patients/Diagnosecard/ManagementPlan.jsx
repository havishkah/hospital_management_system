import { useState, useEffect } from "react";
export const ManagmentPlan = () => {

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
            {selectHide === "Show" ? <select value={selectedValue} onChange={handleSelectChange} className="form-control sele-op">
                <option value="Aspirin 300mg stat and 75mg nocte">Aspirin 300mg stat and 75mg nocte</option>
                <option value="Clopidogrel 300mg stat and 75mg nocte">Clopidogrel 300mg stat and 75mg nocte</option>
                <option value="Atovarstatin  40mg stat and 40mg nocte">Atovarstatin  40mg stat and 40mg nocte</option>
            </select>:""}
            <button className="optn" onClick={handleHide}>Hide/Show</button>
            </div>
            <div>
        {yourArray.map((value, index) => (
          <div key={index} className="my-2">
            <input type="text" 
                value={value} 
                className="w-75 sele-op"
                onChange={(e) => handleInputChange(index, e.target.value)} />
            <button className="removebtn" onClick={() => handleRemoveValue(value)}>Remove</button>
          </div>
        ))}
      </div>

        </div>
    )
}