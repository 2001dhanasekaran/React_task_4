import {useState} from "react";
function Count(){
    const [count,setCount]=useState(0);

    function Increasecount(){
        setCount(count+1);
    }
    function Decreasecount(){
        setCount(count-1);
    }
    return(
    <>
    <h1>Task-1 Count</h1>
    <p>Count:{count}</p>
    <button onClick={Increasecount} style={{backgroundColor:'green', color:'white', padding:'10px'}}>Increase Count</button>
    <button onClick={Decreasecount} style={{backgroundColor:'red', color:'white', padding:'10px'}}>Decrease count</button>
    </>
    )
    
}
export default Count;