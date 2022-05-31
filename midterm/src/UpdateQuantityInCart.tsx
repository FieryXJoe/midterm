import usePut from './hooks/usePut';

interface Props {
    title: string,
    quantity: number;
}

const UpdateQuantityInCart = (props: Props) => {
        usePut(`cart/title/${props.title}`, { quantity: props.quantity + 1 })
        return(<></>);
}
export default UpdateQuantityInCart;