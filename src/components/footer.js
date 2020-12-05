import React from "react";

function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return(
        <footer  >
            <section className="flex pl-8 pt-8 gap-24 text-gray-900 bg-white h-64 mb-4" >
        <div className ="w-2/5" >
        <h1 className="text-2xl text-gray-700 font-medium pb-6" >Beestributors</h1>
        <h1 className="text-md pl-1 font-medium mb-4" >LET'S CONNECT</h1>

       
        <div className="flex h-12 pl-1" >
            <a  href="https://github.com/GiftBanda" >
        <svg className="w-4/5" >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
        </a>

        <a href="https://twitter.com/GiftBanda42" >
        <svg className="w-4/5" >
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
        </a>

        <a href="https://www.linkedin.com/in/gift-banda-557a04b9/" >
        <svg className="w-4/5" >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        </a>

        <a  href="mailto:bandagift42@gmail.com" >
        <svg className="w-4/5" >
        <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"/>
        </svg>
        </a>
      
       </div>

    <p className="text-lg font-medium" >©{year}</p>
        
        </div>

        <div className="flex justify-center gap-12 " >
            <div className="w-3/5" >
            <h1 className="text-2xl font-semibold" >About Us</h1>
            <p className="font-medium mt-4 text-gray-700" >
                We offer beverage distribution services to local small and already established businesses across the nation. Distributed beverages include all coca cola beverages, californian beverages, bigtree beverages and varun beverages.   
                </p>
            </div>
        <div>
        <h1 className="text-2xl font-semibold" >Address</h1>
        <p className="font-medium mt-4 text-gray-700" >
        3674 Luapula Road, Matero, Lusaka, Zambia.
        </p>
        </div>
        
        </div>
        </section>
        <div className="h-12 bg-gray-900 text-center pt-2 text-white " >
            <h1 className="text-gray-300 font-semibold" >Developed with love by Gift Banda, <span>©{year}</span> </h1>
        </div>
        </footer>
    );
}

export default Footer;