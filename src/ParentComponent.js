import React from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent({ id, salary, age }) {
    console.log("parent")
  return (
      <div><h1>ParentComponent</h1>
          <h5>id:{id}</h5>
          <ChildComponent salary={salary} age={age} />
      </div>
      
  )
}

export default ParentComponent