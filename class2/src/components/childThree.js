import React,{useReducer} from 'react'
import counterReducer from './counterReducer'

function childThree(){
    let [state,despatch] =useReducer(counterReducer,10)
    return(
        <div>
            <h1>hello from class 3 (Reducer)</h1>
    <h3> state value is {state}</h3>
    <button onClick={()=>despatch('Increment')}>change state</button>
        </div>
    )
}
export default childThree