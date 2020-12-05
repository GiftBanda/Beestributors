import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck} from "@fortawesome/free-solid-svg-icons";

function Payment() {
    return(
        <div className="text-center h-48" >
            <FontAwesomeIcon className="text-6xl text-red-600 my-4" icon={faTruck} />
            <h1 className="font-bold text-2xl" >PAY ON DELIVERY</h1>
            <p className="text-gray-700 text-sm" > we accept all mobile money networks(airtel, mtn and zamtel) and visa transactions</p>
        </div>
    );
}

export default Payment;