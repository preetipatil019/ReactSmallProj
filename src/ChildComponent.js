import React from 'react'


function ChildComponent({ salary, age }) {
    console.log("child")
  return (
      <div><h1>ChildComponent</h1>
          <h5>age:{age}</h5>
          <h5>salary :{salary}</h5>
      </div>
  )
}

export default React.memo(ChildComponent)