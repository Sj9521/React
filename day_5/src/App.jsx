// this list rendring
// import data from "./data"
// import './App.css'
// function App(){
//   return(
//     <div>
//       <div id='header'>
//         <h1>Products</h1>
//       </div>
//     <div id='container'>
//       {data.products.map((value,index)=>{
//         return(
//           <div id='card'>
//             <h1>{value.title}</h1>
//             <img src={value.thumbnail} width={150}></img><br></br>
//             <span>Rs-- {value.price}</span>
//           </div>
//         )
//       })}
//     </div>
//     </div>
//   )
// }
// export default App

// this is styling--line 35-inline styling, line-36-internal styling, line-37-External styling
import './App.css'
function App(){
  const h2styling={
    background:'yellow',
    padding:'5px 10px'
  }
  return(
    <div>
      <h1 style={{background:'yellow',padding:'5px 10px'}}>Sanjeeeva Reddy</h1>
      <h2 style={h2styling}>Raveendra Reddy</h2>
      <h3 id='style'>Rishi</h3>
    </div>
  )
}
export default App


/**today topics is:
 * 1.list rendring
 * 2.styling types in react:
 * 2.1 Inline
 * 2.2 Internal
 * 2.3 External
 */