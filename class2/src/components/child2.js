import React,{useContext} from 'react'
import counterContext from './counter'


function childTwo() {
    let myContext=useContext(counterContext)
    return (
        <div>
            <h1>hello from child2 (context)</h1>
    <h3>state value is {myContext[0]}</h3>
    <button onClick={()=>myContext[1](++myContext[0])}>change state</button>
        </div>
    )
}

export default childTwo
