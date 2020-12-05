import React from "react";

function Card(props) {
    return (
        <div className="w-1/4 h-64 overflow-hidden border-solid border-2 hover:shadow-lg rounded mt-4" >
        <img  className="w-full h-56" src={props.image} alt="category" />
        {/* <div className="p-6 " >
        <h1 className="text-lg text-start font-semibold" >{props.title}</h1>
        <p className="text-gray-600" >{props.description}</p>
        </div> */}
        
        </div>
    )
}

export default Card;