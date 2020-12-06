import React from 'react'
import C1 from './child1'
import ChildTwo from './child2'
import ChildThree from './childThree'

function parent() {
    return (
        <div>
            <C1></C1>
            <ChildTwo />
            <ChildThree />
        </div>
    )
}

export default parent
