import React from "react";

import { useStateValue } from "./StateProvider";
import "./Subtotal.css";
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";

function Subtotal({ total }) {

  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({total} items) : <strong> {value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This Order contains a Gift
            </small>

            {/* <button>Proceed to Checkout</button> */}
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

// decimalScale={2}
//             value={0}
//             displayType={text}
//             thousandSeparator={true}
//             prefix={'$'}
/*<CurrencyFormat
      // // renderText={() => (
      //
      // //)}
      />*/
