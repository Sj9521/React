import Child from "./child"
// function App(){
//   let a=10
//   let location='Hyderabad'
//   let s=true
//   let details={
//     id:1,
//     name:'sanjeev'
//   }
//   let skills='pyhton sql'
//   return(
//     <div className="appDiv" style={{fontSize:"20px",backgroundColor:"green",color:'yellow'}}>
//       <Child data={a} location={location} s={s} d={details} sk={skills}/>
//     </div>
//   )
// }

// conditional rendering
// function App(){
//   let status=true
//   return(
//     <div>
//       <h1>{status ? 'sanjeev' : 'reddy'}</h1>
//     </div>
//   )
// }

// multi-conditional rendring + props + reuseability of comp(dashboard)

import Dashboard from "./Dashboard"
function App(){
  let statusLogin = Number(prompt("Enter numbers from range of 1-5:"))

  if(statusLogin == 1){
    return <Dashboard v={statusLogin}/>
  }else if(statusLogin == 2){
    return <Dashboard v={statusLogin}/>
  }else if(statusLogin == 3){
    return <Dashboard v={statusLogin}/>
  }else if(statusLogin == 4){
    return <Dashboard v={statusLogin}/>
  }else if(statusLogin == 5){
    return <Dashboard v={statusLogin}/>
  }else{
    return "sorry"
  }
}

export default App
// props: props used to carry your data from one component to another component

// JSX Rules:Javascript Extensible
// 1.Must and should be single parent element
// 2.js exp/var should be used inside {}
// 3.class - className
// 4.attributes should be camel case
// 5.styling in jsx can be written as {{}}  only in inline styling


// Rendering:1.conditional rendering  2.multiple-conditional rendering