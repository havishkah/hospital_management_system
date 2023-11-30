import { useState, useEffect } from "react";

import { IoIosRemoveCircle } from "react-icons/io";
export const AddnewDiagnosis = () => {

    const [selectedValue, setSelectedValue] = useState("");
    const [yourArray, setYourArray] = useState([]);


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
            <select value={selectedValue} onChange={handleSelectChange} className="form-control sele-op">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
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