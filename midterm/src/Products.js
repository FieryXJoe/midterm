import { useNavigate } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import Loading from './Loading';

function Products () {
    const navigate = useNavigate();

    const {data, loading, error} = useFetch('products');

    if(loading){
        return  <Loading />;
    }
    return (<table><tbody>
        { data.length && data.map((data) => {
            return(
                    <tr key ={data.id} onClick = {() => navigate(`/items/${data.id}`)}>
                        <td>{data.title}</td>
                        <td><img src = {data.image} /></td>
                    </tr>  
        )})}  
        </tbody></table>);}
        
export default Products;