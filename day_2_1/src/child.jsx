// function Child(p){
//     return(
//         <div>
//             <h1>Child {p.data} {p.location} {p.s} {p.d.name} {p.sk}</h1>
//         </div>
//     )  
// }
// export default Child  ---- This is first process in one way data binding


function Child({data,location,s,d,sk}){
    return(
        <div>
            <h1>Child {data} {location} {s} {d.id} {sk}</h1>
        </div>
    )  
}
// export default Child  this is second process of one way data binding