import React from "react";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import {Link} from "react-router-dom";



function Promotion(props) {
    return (
        <div className="flex justify-center items-center gap-0 bg-red-700 h-64 px-6" >

        <Slide top >
        <div className="text-white w-4/5 text-left" >
        <h1 className="text-4xl font-semibold text-red-100 pt-4" >{props.company} </h1>
        
        <h2 className="text-2xl font-bold text-yellow-300 py-4" >{props.discount} </h2>
        <p className="font-normal text-sm text-red-100" >
            {props.promo}
        </p>
        <Link className="bg-green-900 hover:bg-green-800 text-white font-semibold rounded p-4 inline-block my-4" to="/contact" >CONTACT US</Link>
        </div>
        </Slide>

        <Zoom>
        <div className="w-3/6" >
        <img className="h-56 " src={props.img} alt="coke" />
        </div>
        </Zoom>

        </div>

    );
}

export default Promotion;