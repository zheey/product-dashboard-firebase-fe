import React from 'react';
import Avatar from './Avatar';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
    return (
        <nav className="sideNav">
            <Avatar image="https://www.construyo.de/_next/image?url=%2Fimg%2Flogo.png&w=3840&q=75"/>
            <div className="navLink-wrapper">
                <NavLink to="/orders" activeClassName="link-active" exact={true}>
                        Orders
                </NavLink>
            </div>
        </nav>
    )
};

export default SideNav;