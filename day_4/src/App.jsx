// function App(){
//   return(
//     <div>
//       <h1>App</h1>
//     </div>
//   )
// }
// export default App

// import { C1 } from './c1'
// import { C2 } from './c2'

// // named exporting
// export function App(){
//   return(
//     <div>
//       <h1>App
//       <C1 />
//       <C2 />
//       <C1 />
//       <C2 />
//       </h1>
//     </div>
//   )
// }



// ListRendring
import ListRendring from "./ListRendring";

function App(){
  let skills=['python','js']
  let nums=[10,20]
  let a=[null,null]
  let u=[undefined,undefined]
  return(
    <div>
      <h1>App</h1>
      <ListRendring s={skills} n={nums} nl={a} ul={u}/>
    </div>
  )
}
export default App


// exporting are two types:
// 1.component exporting : export default App
// 2.named component exporting :export function App(){
//   return(
//     <div>
//       <h1>App</h1>
//     </div>
//   )
// }
// we are dealing with react 19th version
// listrendring with prmitive data types: