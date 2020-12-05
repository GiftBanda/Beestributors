import React from "react";
import Zoom from "react-reveal/Zoom";

function BlogCard(props) {
    return (
        <article className="flex gap-4 p-2 mb-12 border border-solid rounded  " >
            <Zoom>
            <img className="h-64 w-5/12 rounded-sm" src={props.image} alt="happy moment" />
            
        
        <div>
        <h1 className="text-4xl font-semibold pb-2 " >{props.title} </h1>
        <p className="text-gray-600" >
        {props.description}
        </p>
        </div>
        </Zoom>
        </article>
    );
}

export default BlogCard;