import { useNavigate } from 'react-router-dom';
import { idText } from 'typescript';
import AddToCart from './AddToCart';
import useFetchOneProduct from './hooks/useFetchOneProduct';
import Loading from './Loading';

interface Props {
 num: number;
}

const Product = (props: Props) => {
    const { data, loading, error } = useFetchOneProduct(`products`, props.num);
    const navigate = useNavigate();

    if (loading) {
        return <Loading />;
    }
    if (data != undefined)
    return (<>
        <img src={data[0].image} alt={''}></img>
        <div className='details-div'>
            <h3>{data[0].category}</h3>
            <h1>{data[0].title}</h1>
            <h2>{data[0].price}</h2>
            <h4>{data[0].description}</h4>
            <button onClick={() => navigate('/items')} className="button">
                Items
            </button>
            <AddToCart title={data[0].title} price={data[0].price}/>
        </div>
    </>
    );
    else return(<></>)
}
export default Product;