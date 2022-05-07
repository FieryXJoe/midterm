import {useNavigate } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import Loading from './Loading';

function Products () {
    const navigate = useNavigate();

    const {data, loading, error} = useFetch('products');

    if(loading){
        return  <Loading />;
    }
    return (<table>
        { data.length && data.map((data) => {
            return(
                    <tr key ={data.id} onClick = {() => navigate(`/items/${data.id}`)}>
                        <th>{data.title}</th>
                        <th><img src = {data.image} /></th>
                    </tr>  
        )})}  
        </table>);}
        
export default Products;