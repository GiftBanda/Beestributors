import React from "react";
import Home from "./home";
import Products from "./products";
import Blog from "./blog";
import About from "./about"
import Contact from "./contact";
import Pricing from "./pricing";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faCalendarAlt, faHome, faListAlt, faQuestionCircle, faShoppingBag,} from "@fortawesome/free-solid-svg-icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const routes = [
  {
      path: "/",
      exact: true,
      sidebar: () => <div className="mt-4" > <FontAwesomeIcon className="text-6xl m-12" icon={faHome} /> </div> ,
      main: () => <Home />
  },

  {
      path: "/products",
      sidebar: () => <div className="mt-4" > <FontAwesomeIcon className="text-6xl m-12 text-orange-700 " icon={faShoppingBag} /></div>,
      main: () => <Products />
  },

  {
    path: "/pricing",
    sidebar: () => <div className="mt-4" > <FontAwesomeIcon className="text-6xl m-12 text-orange-700 " icon={faListAlt} /></div>,
    main: () => <Pricing />
},

  {
      path: "/blog",
      sidebar: () => <div className="mt-4" > <FontAwesomeIcon className="text-6xl m-12 text-red-700 " icon={faCalendarAlt} /></div>,
      main: () => <Blog />
  },

  {
      path: "/about",
      sidebar: () => <div className="mt-4" > <FontAwesomeIcon className="text-6xl m-12 text-green-700 " icon={faQuestionCircle} /></div>,
      main: () => <About />
  },

  {
      path: "/contact",
      sidebar: () => <div className="mt-4" > <FontAwesomeIcon className="text-6xl m-12 text-blue-700 " icon={faAddressCard} /></div>,
      main: () => <Contact />
  },
];

function Sidebar() {
    return (
       <Router>
       <div className="flex " >
       <div className="px-16 border-solid border-r-2 fixed py-5 w-3/12 " >

       <Fade left >
       <h1 className="text-4xl mb-8 mt-3 font-bold" >Beestributors</h1>
       </Fade>
       
       <hr className="mb-6" />

       <ul className="p-0 list-none" >
       <li className="py-3 rounded hover:bg-gray-200 hover:text-blue-500 w-3/4 text-lg font-semibold" >
              <Link to="/"><span className="mr-4" ><FontAwesomeIcon className="text-2xl" icon={faHome} /></span> Home</Link>
        </li>
        
        <li className="py-3 rounded hover:text-blue-500 w-3/4 hover:bg-gray-200 text-lg font-semibold" >
            <Link to="/products"><span className="mr-5" style={{marginRight: "23px"}} ><FontAwesomeIcon className="text-2xl text-orange-700 " icon={faShoppingBag} /></span> Products</Link>
          </li>

         
          <li className="py-3 rounded hover:text-blue-500 w-3/4 hover:bg-gray-200 text-lg font-semibold" >
            <Link to="/pricing"><span className="mr-5" style={{marginRight: "20px"}} ><FontAwesomeIcon className="text-2xl text-orange-700 " icon={faListAlt} /></span> Pricing</Link>
          </li>
        
        <li className="py-3 rounded hover:text-blue-500 w-3/4 hover:bg-gray-200 text-lg font-semibold" >
          <Link to="/blog"><span className="mr-5" style={{marginRight: "23px"}} ><FontAwesomeIcon className="text-2xl text-red-700 " icon={faCalendarAlt} /></span> Blog</Link>
        </li>  

        <li className="py-3 rounded hover:text-blue-500 w-3/4 hover:bg-gray-200 text-lg font-semibold" >
              <Link to="/about"><span className="mr-4" style={{marginRight: "19px"}} ><FontAwesomeIcon className="text-2xl text-green-700 " icon={faQuestionCircle} /></span> About</Link>
        </li>

        <li className="py-3 rounded hover:text-blue-500 w-3/4 hover:bg-gray-200 text-lg font-semibold" >
              <Link to="/contact"><span  style={{marginRight: "16px"}} ><FontAwesomeIcon className="text-2xl text-blue-700 " icon={faAddressCard} /></span> Contact</Link>
        </li>
       
       </ul>

       
       <Switch >
       {routes.map((route, index) => (
           <Route
           key={index}
           path={route.path}
           exact={route.exact}
           children={<route.sidebar />}
           />
       ))}
       
       </Switch>
       

       </div>

       <div className="flex-1 p-10 ml-56 items-center justify-center" style={{marginLeft: "20rem"}} >
       <Switch>
         {routes.map((route, index) => (
           // Render more <Route>s with the same paths as
           // above, but different components this time.
           <Route
             key={index}
             path={route.path}
             exact={route.exact}
             children={<route.main />}
           />
         ))}
       </Switch>
     </div>

       </div>
       </Router> 
    );
}

export default Sidebar;