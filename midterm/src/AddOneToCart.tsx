import usePut from './hooks/usePut';

interface Props {
    title: string,
    price: number;
}

const AddOneToCart = (props: Props) => {
    usePut(`cart/title/${props.title}`, {
        title: props.title,
        price: props.price,
        quantity: 1
    })
    return(<></>);
}
export default AddOneToCart;