import AddOneToCart from './AddOneToCart';
import useFetchCart from './hooks/useFetchCart';
import usePut from './hooks/usePut';
import UpdateQuantityInCart from './UpdateQuantityInCart';

interface Props {
    title: string,
    price: number;
}

const AddToCart = (props: Props) => {
    const { data, loading, error } = useFetchCart(`cart`, props.title );
    return (<>
            <button onClick={() => {
                if(data!= []) 
                    <AddOneToCart title = {props.title} price = {props.price}/>
                else
                {
                    <UpdateQuantityInCart title = {props.title} quantity = {data[0].quantity} />
                }
            }} className="button">
                Add To Cart
            </button>
    </>
    );
}
export default AddToCart;