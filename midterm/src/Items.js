import { useParams } from 'react-router-dom';
import Products from './Products';
import Product from './Product';

function Items() {
    const { itemNum } = useParams();
    return (
        typeof itemNum === 'undefined' ?
            <div className="items">
                <Products />
            </div>
            :
            <div className="view-item">
                <Product num={itemNum} />
            </div>
    );
}

export default Items;
