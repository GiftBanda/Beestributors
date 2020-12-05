import React from "react";
import Zoom from "react-reveal/Zoom";

function Subscription(){
    return(
      <Zoom >
      <form type="submit" >
        <div className="bg-blue-900 text-white py-6 flex flex-col justify-center items-center" >
            <h1 className="text-2xl text-gray-200 font-medium pb-2" >Subscribe to our email newsletter </h1>
            <p className=" pb-4 text-gray-400 font-medium text-center text-sm w-2/5 " >Receive exclusive updates on promotions direct to your email</p>
             <p className="w-2/5" >
    <label class="block text-gray-200 text-sm font-bold mb-2" for="email" >Email: <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" placeholder="Your Email Address" required /></label>
  </p>
  <p>
    <button className="bg-teal-600 shadow-lg hover:bg-teal-700 text-white text-sm font-semibold rounded p-2 inline-block mt-4 " type="submit">SUBSCRIBE</button>
  </p>
  
        </div>
        </form>
        </Zoom>
    );
}

export default Subscription;