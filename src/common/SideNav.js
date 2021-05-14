import React from 'react';
import Avatar from './Avatar';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
    return (
        <nav className="sideNav">
            <Avatar image="https://images.careerfoundry.com/public/logo/cf_logo_min_full.svg"/>
            <div className="navLink-wrapper">
                <NavLink to="/products" activeClassName="link-active" exact={true}>
                        Products
                </NavLink>
            </div>
        </nav>
    )
};

export default SideNav;