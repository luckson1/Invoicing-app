import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from './routes/Home';
import Invoices from './routes/Invoices';
import About from './routes/About';
import Invoice from './routes/Invoice';


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />}><Route path='home' element={<Home />}/>
        <Route path='invoices' element={<Invoices />}>
          <Route path=':invoiceId' element={< Invoice />} />
        </Route>
        <Route path='about' element={<About />}/>
        <Route path='*' element= {
          <main className='container shadow mt-5 bg-info'> 
            <h2 className='display-2 p-5'> There is Nothing Here</h2>
            <Link to='/' className='nav-link'>Back Home
            </Link> 
          </main> } />
      </Route>

      </Routes>

    
  </React.StrictMode>
  </Router>,
  
  document.getElementById('root')
);
