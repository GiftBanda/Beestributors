import React from "react";
import {Link} from "react-router-dom";
import Card from "./card";
import Reviews from "./reviews";
import Subscription from "./subscription";
import category from "../models/Category";
import ProductCard from "./productCard";
import Rating from "./rating";
import productDescription from "../models/ProductDescription";
import Footer from "./footer";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import Promotion from "./promotion";
import PromotionData from "../models/PromotionData";




function Home() {
    return (
        <div>
        <Fade top>
        <h1 className="text-3xl font-bold mb-8" >Home</h1>
        </Fade>
        <hr className="mb-4" />

        <Carousel>
      
            <Promotion
            
            img={PromotionData[0].img}
            company={PromotionData[0].company}
            promo={PromotionData[0].promo}
            discount={PromotionData[0].discount}
            
            />

            <Promotion
            
            img={PromotionData[1].img}
            company={PromotionData[1].company}
            promo={PromotionData[1].promo}
            discount={PromotionData[1].discount}
            
            />

            <Promotion
            
            img={PromotionData[2].img}
            company={PromotionData[2].company}
            promo={PromotionData[2].promo}
            discount={PromotionData[2].discount}
            
            />

            <Promotion
            
            img={PromotionData[3].img}
            company={PromotionData[3].company}
            promo={PromotionData[3].promo}
            discount={PromotionData[3].discount}
            
            />
          
        
        </Carousel>

        <div >
        <h1 className="text-2xl font-semibold mt-12" >Categories</h1>


        <div className='flex justify-center items-center w-full gap-4 my-12' >
        {category.map(item => (
            <Card
            image={item.image}
            />
        ))}
        </div>
        
        </div>

        <div>
        <h1 className="text-2xl font-semibold my-12" >Products</h1>
        <Zoom>
        {productDescription.map((product, index) => (
            <ProductCard
            key={index}
            title={product.title}
            info={product.info}
            link={product.link}
            image={product.image}
            
            />
        ))}
        </Zoom>
        </div>

        <hr className="my-8" />

        <Rating />

        <hr className="my-8" />

        <Reviews />
        
        <hr className="my-8" />

        <Subscription />
        
        <hr className="my-8" />

        <Slide bottom>
        <div className=" "  >
        <h1 className="text-center text-2xl font-semibold py-6 my-4" >Business Partners</h1>

        <div className="flex justify-center gap-12" >
        <img className="h-32" src="../images/cali.png" alt="californian beverages" />
        <img className="h-32" src="../images/coke.png" alt="coca cola" />
        <img className="h-32" src="../images/pepsilogo.png" alt="shake shake" />
        <img className="h-32" src="../images/bigtreelogo.png" alt="shake shake" />
        </div>
        <div>
            <p className="text-center text-gray-700 font-semibold py-8 text-md" >To Partner With Us Get In Touch </p>
            <Link className="bg-purple-900 hover:bg-purple-800 text-white font-semibold rounded p-4 inline-block flex justify-center items-center " style={{margin: "0 25rem",}} to="/contact" >CONTACT US</Link>
        </div>
        </div>
        </Slide>

        <hr className="my-6" />

        <Footer />
        </div>
       
        
    );
}

export default Home;