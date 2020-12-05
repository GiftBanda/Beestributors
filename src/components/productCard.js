import React from 'react';
import {Link} from "react-router-dom";

function ProductCard(props) {
    return(
        <div className="flex justify-center items-center mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 rounded shadow-lg" >

        <div className="text-white pl-12" >
        <h1 className="font-bold text-6xl mb-2" >{props.title} </h1>
        <p className="w-3/5" > 
        {props.info} 
        </p>
        <Link className="bg-gray-900 hover:bg-gray-700 rounded p-4 inline-block my-4" to={props.link} >View More</Link>
        </div>

        <div className="w-3/6" >
        <img className="h-64 " src={props.image} alt="mosi lager" />
        </div>
        
        </div>
    )
}

export default ProductCard;