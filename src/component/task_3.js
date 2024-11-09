import { useState } from "react";
function Onoffbutton(){
    const [status,setStatus]=useState('OFF');

    function Statustoggle(){
        setStatus((previousstatus)=>(previousstatus==='OFF'?'ON':'OFF'));
    }
    const buttonColor=status==='ON'?'green':'red';
    const boxShadow = status === 'ON' ? '0 0 40px green' : 'none';

    return(
        <>
        <h1>Task- 3 Toggle Button using ternary operator</h1>
        <button onClick={Statustoggle} style={{
            width:'150px', 
            height:'50px', 
            justifyContent:'center', 
            backgroundColor:buttonColor, 
            boxShadow:boxShadow,
            color:'white',
            borderRadius:'10px',
            marginLeft:'10px'
            }}>{status}</button>
        </>
    )
}
export default Onoffbutton;