import React from "react";
import Rating from "./rating";
import CokeData from "../models/CokeTableData";
import CaliData from "../models/CblTableData";
import PepsiData from "../models/PepsiDataTable";
import BigtreeData from "../models/BigtreeData";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

function Table(){
    return(
        <main className="bg-gray-100" >
            <section className="flex justify-center items-center rounded text-white h-64 gap-6 px-6 bg-gradient-to-r from-red-600 to-red-900 mb-12" >
        <Fade top>
        <div>
        <h1 className="text-4xl font-bold" >Coca Cola Beverages</h1>
        <p className="font-semibold text-center" >Share The Moment</p>
        </div>
        </Fade>
        <Zoom>
        <div>
        <img className="h-48" src="../images/coke.png" alt="mosi lager" />
        </div>
        </Zoom>
        </section>

            <section>
        <table className="w-3/5 py-6"  >
            <thead>
            <tr className="w-full text-2xl " >
                <th className="border-r px-12" >Product</th>
                <th className="border-r px-12 text-orange-700" >Quantity</th>
                <th className="border-r px-12 text-blue-700" >Cost</th>
            </tr>
            </thead>
            
            <tbody className="" >
               
                {CokeData.map((product, index) => (
                   <tr className=" font-medium" >
                    <td className="pt-6 pl-12" >{product.product}</td>
                <td className="pt-6 pl-16 text-orange-700 " >{product.quantity}</td>
                    <td className="pt-6 pl-16 text-blue-700" >{product.cost} </td>
                </tr>
                ))}
            </tbody>
        </table>
        </section>

        <hr className="my-6" />

        <section>
        <article className="flex justify-center items-center rounded text-white h-64 gap-6 px-6 bg-gradient-to-r from-orange-600 to-orange-700 my-12" >
        <Fade top>
        <div className="w-4/5" >
        <h1 className="text-4xl font-bold text-center" >Californian Beverages Ltd </h1>
        <p className="font-semibold text-center" >Take It To The Max </p>
        </div>
        </Fade>
        <Zoom>
        <div>
        <img className="h-64 w-3/5 mb-4" src="../images/cali.png" alt="californian beverages logo" />
        </div>
        </Zoom>
        </article>
        <section>
        <table className="w-3/5 py-6"  >
            <thead>
            <tr className="w-full text-2xl " >
                <th className="border-r px-12" >Product</th>
                <th className="border-r px-12 text-orange-700" >Quantity</th>
                <th className="border-r px-12 text-blue-700" >Cost</th>
            </tr>
            </thead>
            
            <tbody className="" >
               
                {CaliData.map((product, index) => (
                   <tr className=" font-medium" >
                    <td className="pt-6 pl-12" >{product.product}</td>
                <td className="pt-6 pl-16 text-orange-700 " >{product.quantity}</td>
                    <td className="pt-6 pl-16 text-blue-700" >{product.cost} </td>
                </tr>
                ))}
            </tbody>
        </table>
        </section>
        </section>

        <hr className="my-6" />

        <section>


        <section className="flex justify-center items-center rounded text-white h-64 gap-6 px-6 bg-gradient-to-r from-blue-700 to-blue-900 my-12" >
        <Fade top>
        <div>
        <h1 className="text-4xl font-bold text-white" >Varun Food and Beverages </h1>
        <p className="text-center" >For The Love Of It</p>
        </div>
        </Fade>
        <Zoom>
        <div>
        <img className="h-64 " src="../images/pepsilogo.png" alt="Pepsi Logo" />
        </div>
        </Zoom>
        </section>
        <section>
        <table className="w-3/5 py-6"  >
            <thead>
            <tr className="w-full text-2xl " >
                <th className="border-r px-12" >Product</th>
                <th className="border-r px-12 text-orange-700" >Quantity</th>
                <th className="border-r px-12 text-blue-700" >Cost</th>
            </tr>
            </thead>
            
            <tbody className="" >
               
                {PepsiData.map((product, index) => (
                   <tr className=" font-medium" >
                    <td className="pt-6 pl-12" >{product.product}</td>
                <td className="pt-6 pl-16 text-orange-700 " >{product.quantity}</td>
                    <td className="pt-6 pl-16 text-blue-700" >{product.cost} </td>
                </tr>
                ))}
            </tbody>
        </table>
        </section>
        </section>

        <hr className="my-6" />

        <section>


        <section className="flex justify-center items-center rounded text-white h-64 gap-6 px-6 bg-gradient-to-r from-blue-700 to-blue-900 my-12" >
        <Fade top>
        <div>
        <h1 className="text-4xl font-bold text-white" >Bigtree Beverages </h1>
        <p className="text-center" >Drink Different</p>
        </div>
        </Fade>
        <Zoom>
        <div>
        <img className="h-64" src="../images/bigtreelogo.png" alt="bigtree logo" />
        </div>
        </Zoom>
        </section>
        <section>
        <table className="w-3/5 py-6"  >
            <thead>
            <tr className="w-full text-2xl " >
                <th className="border-r px-12" >Product</th>
                <th className="border-r px-12 text-orange-700" >Quantity</th>
                <th className="border-r px-12 text-blue-700" >Cost</th>
            </tr>
            </thead>
            
            <tbody className="" >
               
                {BigtreeData.map((product, index) => (
                   <tr className=" font-medium" >
                    <td className="pt-6 pl-12" >{product.product}</td>
                <td className="pt-6 pl-16 text-orange-700 " >{product.quantity}</td>
                    <td className="pt-6 pl-16 text-blue-700" >{product.cost} </td>
                </tr>
                ))}
            </tbody>
        </table>
        </section>
        </section>

        <hr className="my-6" />

        <div className="h-32 flex justify-center items-center" >
        <a href="../images/cv.docx" download>
        <h1 className="text-center shadow-lg font-semibold text-lg bg-green-800 hover:bg-green-700 p-2 text-white rounded-md border mx-64" >Download All Prices</h1>
        </a>
        </div>

        
        <hr className="my-8 " />

        <Rating />
        

        </main>
    );
}

export default Table;