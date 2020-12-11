import React from 'react';
import {Link} from 'react-router-dom'
const Header = () => {
    return (
       <header className=" d-block p-2    text-white w-100">
           <div className="container">
               <nav className="navbar navbar-expand-lg navbar">
                   <Link className="navbar-brand text-white display-1 sizeMy "  to="/" >Food-D</Link>
                   <div className="navbar-nav ml-auto">
                       <Link className="nav-link " to="/menu">Menu</Link>
                   </div>
               </nav>
               <div>

               </div>
           </div>
       </header>
    );
};

export default Header;