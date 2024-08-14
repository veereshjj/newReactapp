import "./Menu.css";
import React from "react";

import {BrowserRouter, Link, Navigate, Routes, Route} from 'react-router-dom'
import {Home} from '../Home'
import {About} from '../About'
import {Contact} from '../Contact'

function template() {
  const{menuItem,isMobileView,left}= this.state;
  return (
    
                 <div>
                   
                    
                    {this.state.isMobileView && <button className='mobile-menu-button' onClick={this.fnMobileMenuBtnClick}>Menu</button>}
                    <BrowserRouter>
                      <ul style={{left:left}}className={isMobileView?'mobile-menu':'menu'}>
                          
                      <li className= {menuItem=='H'&& 'menu-active'} ><Link id='H' to='home'>Home</Link></li>
                      <li className= {menuItem=='A'&& 'menu-active'} ><Link id='A' to='about'>About Us</Link></li>
                      <li className= {menuItem=='C'? 'menu-active':''} ><Link id='C' to='contacts'>Contacts</Link></li>
                      
                      </ul>

                      <Routes>
                      <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contacts' element={<Contact />} />
                        <Route path='*' element={<Navigate to ='home' />} />
                      </Routes>


                    </BrowserRouter>
                  


                    </div>
  );
};

export default template;
