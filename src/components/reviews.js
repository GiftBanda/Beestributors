import React from "react";
import Zoom from "react-reveal/Zoom";

function Reviews() {
    return (
        <Zoom>

        <div className=" border rounded" >
        <h1 className="text-center text-2xl font-semibold py-6" >Customer Reviews</h1>

        <div className="flex justify-center gap-12" >
        <img className="rounded-full h-24 pl-6" src="../images/gift.png" alt="user avatar" />

        <div className="" >
        <h1 className='font-semibold text-2xl' >Online Shopping</h1>
        <p className="mr-6 py-1 " >
        I really haven't been a fun of online ordering due to my past experience with other websites especially when it comes to delivery, but that changed after making my first order with beestributors, the customer service is lovely, the delivery is smooth with a 100% guarantee am now only purchasing my beverages through beestributors they serve me time and money. 
         </p>
        <strong className="text-gray-800" >Gift Banda</strong>
        <p className="text-md text-gray-600 mb-4" >
            Small Business Owner
        </p>
        </div>

        </div>

        </div>
        </Zoom>

    );
}

export default Reviews;