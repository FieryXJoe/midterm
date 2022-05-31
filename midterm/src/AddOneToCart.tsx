import usePost from './hooks/usePost';

interface Props {
    title: string,
    price: number;
}

const AddOneToCart = (props: Props) => {
    usePost(`cart/title/${props.title}`, {
        title: props.title,
        price: props.price,
        quantity: 1
    })
    return(<></>);
}
export default AddOneToCart;