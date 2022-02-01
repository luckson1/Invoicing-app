import React from 'react';
import {Link, Outlet} from "react-router-dom";
function App () {
  return <div className='App'>
    <nav className='navbar nav-expand navbar-dark bg-primary'>
      <ul className='navbar-nav fs-5'>
        <Link className= 'nav-link' to='/home'> Home
        </Link>
        <Link className= 'nav-link' to='/Invoices'> Invoices
        </Link>
        <Link className= 'nav-link' to='/About'> About
        </Link>
      </ul>
    </nav>
    <Outlet />
  </div>;
};
export default App;