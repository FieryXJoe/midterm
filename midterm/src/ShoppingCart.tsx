import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from './components/Box';
import ShoppingCartConfirm from './components/ShoppingCartConfirm';
import useFetchWholeCart from './hooks/useFetchWholeCart';
import Loading from './Loading';

function ShoppingCart() {
    const navigate = useNavigate();

    const { data, loading, error } = useFetchWholeCart('cart');
    const [show, setShow] = useState(false);
    const [total, setTotal] = useState(0);

    let tempTotal = 0;

    function showCheckout()
    {
        setTotal(tempTotal);
        setShow(true);
    }

    if (loading) {
        return <Loading />;
    }
    if (!show) 
    {
        return (<><table className="shopping-cart-table"><tbody>
            <tr>
                <td>Item</td>
                <td>Price Per Item</td>
                <td>Quantity</td>
                <td>Total Cost</td>
            </tr>
            {data.length && data.map((data) => {
                tempTotal += data.price * data.quantity
                return (
                    <tr key={data.title}>
                        <td>{data.title}</td>
                        <td>{data.price}</td>
                        <td>{data.quantity}</td>
                        <td>{data.price * data.quantity}</td>
                    </tr>
                )
            })}
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>{tempTotal}</td>
            </tr>
        </tbody></table>
            <button onClick={() => showCheckout()} className="button" style={{float:'right'}}>
                Checkout
            </button>
        </>);
    }
    else 
    {
        return (
            <ShoppingCartConfirm func = {() => setShow(false)} amount = {total} />
        );
    }
}

export default ShoppingCart;