import { useState } from "react";
function DynamicInput(){
    const [inputValue,setInputvalue]=useState('');
    const inputChange=(event)=>{setInputvalue(event.target.value)};
    return(
        <>
        <h1>Task 2- Dynamic Input Field</h1>
        <input type="text" value={inputValue} onChange={inputChange} style={{ padding: '8px', fontSize: '16px' }}/>
        <p style={{color:'green'}}><strong>Current Input: {inputValue}</strong></p>
        </>
    )
}
export default DynamicInput;