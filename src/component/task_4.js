import { useState } from "react";
function Text(){
    const [value,setValue]=useState(true);
    function Texttoggle(){
        setValue((previousValue) => !previousValue);
    }
    const buttoncolor=value===true?'red':'green';
    return(
    <>
    <h1>Task 4- Show/Hide Text</h1>
    <div style={{display:'flex'}}>
    <button onClick={Texttoggle} style={
        {
            height:'50px',
            width:'100px',
            marginLeft:'20px',
            borderRadius:'5px',
            backgroundColor:buttoncolor,
            color:'white',
        }
        }>{value?'Hide text':'Show text'}</button>
    <p style={{marginLeft:'30px'}}>{value?'Sample text':""}</p>
    </div>
    </>
    )
}
export default Text;