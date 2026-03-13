import Navbar from "./navbar"

function App(){
  let a=10
  return(
    <div>
      <Navbar />
      <h1>This is intro class of react</h1>
      <h1>{a}</h1>
    </div>
  )
}
export default App