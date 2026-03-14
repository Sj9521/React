import React from 'react'
import Child from './Child'

function App() {
  return (
    <div>App
      <Child />
    </div>
  )
}

export default App


// comp-life-cycle:comp life cycle are three types:
// 1.comp mounted
// 2.comp Updation
// 3.comp unmounted
// here we use useEffect()