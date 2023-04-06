import React from 'react'

function Container(Component) {
  return () => (
      <div>HOC
          <Component />
    </div>
  )
}

export default Container