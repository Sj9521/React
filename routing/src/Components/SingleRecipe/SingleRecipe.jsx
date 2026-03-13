import data from "../../data";
import { useParams } from "react-router-dom";

function SingleRecipe() {
    const { id } = useParams();

    const filteredrecipe = data.products.filter((x) => x.id === Number(id));

    return (
        <div>
            <img src={filteredrecipe[0]?.thumbnail} width={200} style={{textAlign:'center'}}></img>
            <h2>{filteredrecipe[0]?.title}</h2>
        </div>
    );
}

export default SingleRecipe;