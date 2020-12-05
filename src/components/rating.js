import React from "react";
import Zoom from "react-reveal/Zoom";


function Rating() {
    return (
        <Zoom >

        <div className="h-64 bg-blue-800 rounded text-white flex justify-center items-center gap-32" >
        <div >
        <h className="text-6xl font-bold" >100%</h>
        <p className="font-semibold pl-3" >Top Quality</p>
        </div>

        <div>
        <h className="text-6xl font-bold" >4.8</h>
        <p className="font-semibold" >Customer Rating</p>
        </div>

        <div>
        <h className="text-6xl font-bold" >100%</h>
        <p className="font-semibold pl-3" >On Time Delivery</p>
        </div>

        </div>
        </Zoom>
    );
}

export default Rating;