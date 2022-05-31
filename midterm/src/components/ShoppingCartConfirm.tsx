import { VoidExpression } from "typescript";

const ShoppingCartConfirm = (props:{func: () => void}) => {
    return (
        <div>
            <div className="checkout">
                Would you like to confirm the purchase?
                <br />
                <button onClick={props.func} className="button">
                    Confirm
                </button>
                <button onClick={props.func} className="button">
                    Cancel
                </button>
            </div>
        </div>
    );
}
export default ShoppingCartConfirm