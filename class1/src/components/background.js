import React,{useState} from 'react'
import '../App.css';

const Background =()=>{
    const [isDay, setisDay] = useState(true)
return(
    <div className={isDay ? 'day' : 'night'}>
      <h3> { isDay ? 'Good Morning' : 'Good Night'}</h3>
       <button onClick={()=> setisDay(!isDay)}>Nagatioate</button>
    </div>
)
}
export default Background;