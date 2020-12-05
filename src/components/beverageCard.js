import React from "react";
import {Link} from "react-router-dom";

function BeverageCard(props) {
    return (
        <div className="flex border p-4 hover:shadow-xl rounded mt-8 " >
        <div className="text-center py-4 w-3/5" >
        <h1 className="font-semibold text-4xl " >{props.title}</h1>
        <hr className="mt-4" />
        <p className="text-gray-600 py-2 " >We Have It All </p>
        <ul className=" font-medium" >
        <li>Different Flavours</li>
        <li>Top Quality</li>
        <li>Refreshing</li>
        </ul>
        <Link className="bg-blue-900 hover:bg-gray-700 text-white font-semibold rounded p-4 inline-block mt-4" to="/contact" >CONTACT US</Link>
        </div>
        <img className="h-64 pt-12" src={props.image} alt="coca cola" />
        </div>
    );
}

export default BeverageCard;