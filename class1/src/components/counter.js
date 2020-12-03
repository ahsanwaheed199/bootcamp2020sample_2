import React,{useState,useEffect} from 'react'
import '../App.css';

const Counter =()=>{
   var [count, setCount]=useState(0)
   useEffect(() => {
       
       return () => {
           document.title= `you clicked ${count} times`
       }
   }, [count])
return(
    <div className='bcolor'>
        <h1> my count value is {count} </h1> 
        <button onClick={()=> {setCount(++count)}}>Increment Count</button>
        
    </div>
)

}
export default Counter