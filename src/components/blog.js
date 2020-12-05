import React from "react";
import BlogCard from "./blogCard";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function Blog() {
    return (
        <div>
        <Fade top>
        <h1 className="text-3xl font-bold mb-8" >Blog</h1>
        </Fade>
        <hr className="mb-4" />
        <main>
        <article className="flex gap-4" >
        <div>
        <h1 className="text-4xl pb-2" >OCTOBER FEST</h1>
        <p className="text-gray-600" >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ul className="py-4" >
        <li  className="text-blue-700 font-semibold " >
        Host: <span className="text-black" >Gift Banda</span> 
        </li>
        <li className="text-orange-700 font-semibold" >
        Date: <span className="text-black" >23 November, 2020.</span> 
        </li>
        <li className="text-green-700 font-semibold" >
        Venue: <span className="text-black" >Nasdaq</span> 
        </li>
        </ul>
        </div>
        <img className="h-64" src="../images/lager.png" alt="mosi lager" />
        </article>
        </main>

        <section>
        <h1 className="text-2xl font-semibold my-6" >HIGHLIGHTS</h1>
        <Zoom>
        <div >
        <img className='rounded' src="../images/friends.jpg" alt="People partying" />
        </div>
        </Zoom>
        </section>

        <hr className="my-6" />

        <section>
        <h1 className="text-2xl font-semibold my-6" >SHARE THE MOMENT</h1>
         
           <BlogCard
         
           title= "Make Meal Times Special With Coca Cola"
           image= "../images/dinnercoke.jpg"
           description= "The day the world stopped is the day we found where to go, as families tuck into a series of home-cooked meals, with Coca-Cola taking pride of place on their dinner tables."
           />

        <hr className="my-2" />

        <h1 className="text-2xl font-semibold my-6" >THAT'S WHAT I LIKE</h1>

           <BlogCard 
           title="Make A Picnic Refreshing With A Pepsi"
           image="../images/pepsiunite.jpg"
           description="After that long hardworking day, putting in the time to deliver your very best. Enjoy the refreshing and exciting sunset with a pespi you deserve it."
           />

<hr className="my-2" />

<h1 className="text-2xl font-semibold my-6" >TAKE IT TO THE MAX</h1>

   <BlogCard 
   title="Weekends With The Family, Chilax To The Max"
   image="../images/chilax.jpg"
   description="They say spending time with your wife and kids is pricelss, what better way is it to do than to chilax with applemax."
   />

<hr className="my-2" />

<h1 className="text-2xl font-semibold my-6" >MASTER THE POWER</h1>

   <BlogCard 
   title="Keep Energy Levels High"
   image="../images/kungfuenergy.jpg"
   description="Are you a student preparing for that exam? Kungfu will give you the energy you need to study and prepare. Are you a driver, spending long hours on the road? Kungfu will help you be more alert giving you the energy you need to deliver."
   />
        

        </section>
        </div>
    )
}

export default Blog;