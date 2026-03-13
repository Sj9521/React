import data from "../../data"
import './products.css'
import { useNavigate } from "react-router-dom"
function Products(){
    const nav=useNavigate()
    return(
        <div id="container">
            {data.products.map((value,index)=>{
                return(
                    <div id='card' onClick={()=>nav(`${value.id}`)}>
                        <img src={value.thumbnail} width={150}></img>
                        <h1>{value.title}</h1>
                        <h4>{value.price}</h4>
                    </div>
                )
            })}
        </div>
    )
}
export default Products