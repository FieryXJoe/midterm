import { VoidExpression } from "typescript";

interface Props{
    func: () => void,
    amount: number
}

const ShoppingCartConfirm = (props:Props) => {
    return (
        <div>
            <div className="checkout">
                <div>
                    Cost: {props.amount}
                </div>
                <table>
                    <tbody>
                        <tr>
                        <td><label htmlFor="ccn">Credit Card Number:</label></td>
                        <td><input id="ccn" type="tel" inputMode="numeric" pattern="[0-9]{13,19}" autoComplete="cc-number" maxLength={19} placeholder="xxxx xxxx xxxx xxxx"></input></td>
                        </tr>
                        <tr>
                        <td><label htmlFor="ccn">CVV Number:</label></td>
                        <td><input className="required" id="field" type="number" max="999" min="-999" name="cvv"/></td>
                        </tr>
                    </tbody>
                </table>
                <br />
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