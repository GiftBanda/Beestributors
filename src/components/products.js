import React from "react";
import BeverageCard from "./beverageCard";
import Reviews from "./reviews";
import beverages from "../models/Beverages";
import Footer from "./footer";
import pepsi from "../models/Pepsi";
import bigtree from "../models/Bigtree";
import california from "../models/California";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";


function Products() {
    return(
        <div id="items" >
        <Fade top>
        <h1 className="text-3xl font-bold mb-8" >Products</h1>
        </Fade>
        <hr className="mb-4" />

        <section className="flex justify-center items-center rounded text-white h-64 gap-6 px-6 bg-gradient-to-r from-red-600 to-red-900 mt-12" >
        <Fade top>
        <div>
        <h1 className="text-4xl font-bold" >Coca Cola Beverages </h1>
        <p className="font-semibold text-center" >Share The Moment </p>
        </div>
        </Fade>
        <Zoom>
        <div>
        <img className="h-48" src="../images/coke.png" alt="mosi lager" />
        </div>
        </Zoom>
        </section>

        <section>
            
        <div >
        <Zoom>
        {beverages.map((beverage, index) => (
            <BeverageCard
            key={index}
            image={beverage.image}
            title={beverage.title}
            
            />
        ))}
       </Zoom>
        </div>
        
        </section>

        <hr className="my-8" />
        <section>
        <article className="flex justify-center items-center rounded text-white h-64 gap-6 px-6 bg-gradient-to-r from-orange-600 to-orange-700 mt-12" >
        <Fade top>
        <div className="w-4/5" >
        <h1 className="text-4xl font-bold text-center " >Californian Beverages Ltd </h1>
        <p className="font-semibold text-center" >Take It To The Max </p>
        </div>
        </Fade>
        <Zoom>
        <div>
        <img className="h-64 w-3/5 mb-4" src="../images/cali.png" alt="californian beverages logo" />
        </div>
        </Zoom>
        </article>
        <div>
            <Zoom>
        {california.map((juice, index) => (
            <BeverageCard 
            key={index}
            image={juice.image}
            title={juice.title}
            />
        )) }
        </Zoom>
        </div>
        
        </section>

        <hr className="my-8" />

        <main>
        <section className="flex justify-center items-center rounded text-white h-64 gap-6 px-6 bg-gradient-to-r from-blue-700 to-blue-900 mt-12" >
        <Fade top>
        <div>
        <h1 className="text-4xl font-bold text-white" >Varun Food and Beverages </h1>
        <p className="text-center" >For The Love Of It</p>
        </div>
        </Fade>
        <Zoom>
        <div>
        <img className="h-64" src="../images/pepsilogo.png" alt="pepsi logo" />
        </div>
        </Zoom>
        </section>

        

        <div className=" "  >
        <Zoom>
        {pepsi.map((item, index) => (
            <BeverageCard 
            key={index}
            title={item.title}
            image={item.image}
            />
        ))}
        </Zoom>
        </div>
        
        </main>

        <main>
        <section className="flex justify-center items-center rounded text-white h-64 gap-6 px-6 bg-gradient-to-r from-blue-700 to-blue-900 mt-12" >
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

       

        <div className=" "  >
        <Zoom>
        {bigtree.map((item, index) => (
            <BeverageCard 
            key={index}
            title={item.title}
            image={item.image}
            />
        ))}
        </Zoom>
        </div>
        
        </main>

        <section>
        
        <hr className="my-8" />
        
        <Reviews />

        <hr className="my-8" />

        <Footer />
        </section>

        </div>
    );
}

export default Products;