import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function About() {
    return (
        <div>
        <Fade top>
        <h1 className="text-3xl font-bold mb-8" >About Us</h1>
        </Fade>
        <hr className="mb-4" />

        
        <Fade top>
        <section className="flex justify-center gap-4" >
            
            <article>
                <img src="../images/coke.png" alt="company logo" />
            </article>
            

            

            <article>
                <h2 className="text-2xl font-semibold mb-2" >About Beestributors</h2>
               <p>
                A Company founded by Gift Banda. We offer beverage distribution services to local small and already established businesses across the nation. Distributed beverages include all coca cola beverages, californian beverages, bigtree beverages and varun beverages.Our mission is to market and sell high quality beverages that will be cherished and handed down from generation to generation.
                </p>
            </article>
            
        </section>
        </Fade>
        
        <Zoom >

        <section>
            <h1 className="text-2xl font-semibold pt-8 text-center" >Meet The Team</h1>
            <div className="flex justify-center gap-6" >
            <div className="mt-6" >
                <img className="rounded-full h-24 border w-24 " src="../images/gb.png" alt="Circle Avatar" />
                <p className="text-lg font-semibold mt-4" >Gift Banda</p>
                <p className="text-gray-700" >CEO and Founder</p>
            </div>
            <div className="mt-6" >
                <img className="rounded-full h-24 border w-24" src="../images/gb.png" alt="Circle Avatar" />
                <p className="text-lg font-semibold mt-4" >Wilson Banda</p>
                <p className="text-gray-700" >Web Designer</p>
            </div>
            <div className="mt-6" >
                <img className="rounded-full h-24 border w-24" src="../images/gb.png" alt="Circle Avatar" />
                <p className="text-lg font-semibold mt-4" >Tyson Banda</p>
                <p className="text-gray-700" >PR Manager</p>
            </div>
            <div className="mt-6" >
                <img className="rounded-full h-24 border w-24" src="../images/gb.png" alt="Circle Avatar" />
                <p className="text-lg font-semibold mt-4" >Chapa Chipulu</p>
                <p className="text-gray-700" >Digital Marketer</p>
            </div>
            </div>
            
        </section>
        </Zoom>
        </div>

     
    );
}

export default About;