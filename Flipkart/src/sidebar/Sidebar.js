import React from 'react'
import "./Sidebar.css";
// import { Sidebardata } from './Sidebardata';
import { Link, Outlet } from 'react-router-dom';
import NavScrollExample from './NavScrollExample';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Sidebar = () => {
    return (
        <div className='app'>
            <div className='sidebar'>
                <ul className='sidebarlist'>
                    <li className='head'><h4>Flipkart</h4></li>
                    <Link to='Admin'><li className='row'>
                        <div id='icon'><AccountCircleIcon /></div>
                        <div id='title'>Admin</div>
                    </li>
                    </Link>
                    <Link to='user'><li className='row'>
                        <div id='icon'><PersonIcon /></div>
                        <div id='title'>User</div>
                    </li>
                    </Link>


                </ul>

            </div>

            <div id='main'>

                <NavScrollExample />
                <Outlet />
            </div>
        </div>
    )
}

export default Sidebar
