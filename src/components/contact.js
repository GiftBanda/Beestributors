import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faLocationArrow, faPhone} from "@fortawesome/free-solid-svg-icons";



function Contact() {
    return (
        <main>
        <div>
        <Fade top>
        <h1 className="text-3xl font-bold mb-8" >Contact</h1>
        </Fade>
        <hr className="mb-4" />
        </div>

        <section className="flex justify-center gap-6 mt-6" >

        <Zoom >
        <div className="w-3/6" >
        <h1 className="text-2xl mb-6 font-medium" >Get In Touch</h1>
        <p className=" text-lg mb-6 text-gray-600 " >To make an order you can contact us on the details provided below 24/7</p>
        <a href="mailto:bandagift42@gmail.com">
        <h2 className="font-semibold text-lg mb-6" > <span><FontAwesomeIcon className="text-lg text-yellow-500" icon={faEnvelope} /> </span> Bandagift42@gmail.com</h2>
        </a>

        <a href="tel:+260977560054">
        <h2 className="font-semibold text-lg mb-6" > <span><FontAwesomeIcon className="text-lg text-blue-700" icon={faPhone} /> </span> +260977560054</h2>
        </a>

        <a href="" >
          <h2 className="font-semibold text-lg gap-3 mb-6 flex w-1/5" >
            <span className="w-1/5 h-2" >
              <svg className="text-green-500" >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </span>
            +260977560054
          </h2>
        </a>
        
        <h2 className="font-semibold text-lg" > <span><FontAwesomeIcon className="text-lg text-red-700 " icon={faLocationArrow} /> </span> 3674 Luapula Road, Matero, Lusaka, Zambia.</h2>
        </div>
        </Zoom>

        <Zoom>

        <div className="w-3/6 border bg-white shadow-md rounded px-8 pt-2 pb-2 " >
        {/* <h1 className="text-lg pb-1 font-medium text-gray-900 " >LETS TALK</h1> */}
        <form  name="contact" method="POST" data-netlify="true">
  <p>
    <label class="block  text-sm font-bold mb-2 " for="username" >Your Name: <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" placeholder="Your FullName" required /></label>   
  </p>
  <p>
    <label class="block  text-sm font-bold mb-2" for="email" >Phone Number: <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="tel" name="phone" placeholder="Your Phone Number" required /></label>
  </p>
  <p>
    <label class="block  text-sm font-bold mb-2" for="business name" >Business Name: <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="business name" placeholder="Business Name" required /></label>
  </p>
  <p>
    <label class="block  text-sm font-bold mb-2" for="location" >Business Location: <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="location" placeholder="Location" required /></label>
  </p>
  
  <p>
    <label  class="block  text-sm font-bold mb-2" >Beverage: <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="message" type="text" for="message" placeholder="Enter the beverage(s) you want to order" required ></textarea></label>
  </p>
  <p>
    <button className="bg-blue-900 hover:bg-gray-700 text-white text-lg font-semibold rounded p-2 inline-block w-3/6" type="submit">Inquire</button>
  </p>
</form>
        </div>
        </Zoom>
        </section>
        </main>
    )
}

export default Contact;