import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './SideBar.css';
import MenuIcon from '@mui/icons-material/Menu';
import {UserContext} from '../UserContext';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      {user ? 
      <div className='navbar'>
      <div className='navbar'>
      <Link to='#' className='menu-bars'>
        <MenuIcon fontSize="large" onClick={showSidebar} />
      </Link>
      </div>
      <div className='navbar__title navbar__item'></div>
      <div className='navbar__item'>User: {user.email} </div>   
      <div className='navbar__item'>Role: {user.role} </div>
      { user.role === "Admin" ? <div className='navbar__item'> Admin Tab </div> : null}   
      </div>
      : null}
      
      {user ? 
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav> 
      : null}
    </>
  );
}

export default Navbar;