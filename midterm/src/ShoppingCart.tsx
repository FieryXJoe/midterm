import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from './components/Box';
import useFetchWholeCart from './hooks/useFetchWholeCart';
import Loading from './Loading';

function ShoppingCart() {
    const navigate = useNavigate();

    const { data, loading, error } = useFetchWholeCart('cart');
    const [show, setShow] = useState(false);

    if (loading) {
        return <Loading />;
    }
    let total = 0;
    if (show) {
        return (
            <div>
                <div className="checkout">
                    Would you like to confirm the purchase?
                    <br />
                    <button onClick={() => setShow(false)} className="button">
                        Confirm
                    </button>
                    <button onClick={() => setShow(false)} className="button">
                        Cancel
                    </button>
                </div>
            </div>
        );
    }
    else {
        return (<><table className="shopping-cart-table"><tbody>
            <tr>
                <td>Item</td>
                <td>Price Per Item</td>
                <td>Quantity</td>
                <td>Total Cost</td>
            </tr>
            {data.length && data.map((data) => {
                total += data.price * data.quantity
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
                <td>{total}</td>
            </tr>
        </tbody></table>
            <button onClick={() => setShow(true)} className="button">
                Checkout
            </button>
        </>);
    }
}

export default ShoppingCart;