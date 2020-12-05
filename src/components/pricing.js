import React from "react";
import Fade from "react-reveal/Fade";
import Table from "./table";
import Payment from "./payment";

function Pricing(){
    const date = new Date();
    const year = date.getFullYear();

    return (
        <main>
            <div>
        <Fade top>
        <h1 className="text-3xl font-bold mb-8" >Pricing</h1>
        </Fade>

        <hr className="mb-4 " />

        <section>
            <Table />
        </section>
        </div>

      

        <hr className="my-8 " />

        <Payment />

        <div className="h-12 bg-gray-900 text-center pt-2 text-white mt-6 " >
            <h1 className="font-semibold text-gray-300" >Developed with love by Gift Banda, <span>©{year}</span> </h1>
        </div>

        </main>
    );
}

export default Pricing;