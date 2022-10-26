import react, {useState,useEffect, useDebugValue} from "react";

const MyButton=()=>{
    const [count,setCount] =useState(0)
    useEffect(()=>{
        document.title='You clicked ${count} times';
        console.log('state changed')
    },[])
    return(
        <button onClick={()=> setCount(count+1)}>
            You clicked {count} times
        </button>
    )
}
export default MyButton;