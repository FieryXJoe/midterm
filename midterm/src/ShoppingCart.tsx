import { useNavigate } from 'react-router-dom';
import useFetchWholeCart from './hooks/useFetchWholeCart';
import Loading from './Loading';

function ShoppingCart () {
    const navigate = useNavigate();

    const {data, loading, error} = useFetchWholeCart('cart');

    if(loading){
        return  <Loading />;
    }
    let total = 0;
    return (<table className="shopping-cart-table"><tbody>
        <tr>
            <td>Item</td>
            <td>Price Per Item</td>
            <td>Quantity</td>
            <td>Total Cost</td>
        </tr>
        { data.length && data.map((data) => {
            total += data.price * data.quantity
            return(
                    <tr key ={data.title}>
                        <td>{data.title}</td>
                        <td>{data.price}</td>
                        <td>{data.quantity}</td>
                        <td>{data.price * data.quantity}</td>
                    </tr>  
        )})}  
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>{total}</td>
        </tr>
        </tbody></table>);}
        
export default ShoppingCart;