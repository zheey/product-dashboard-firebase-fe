import React from 'react';
import Avatar from './Avatar';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SideNav = () => {
    const { userData } = useAuth();
    return (
        <nav className="sideNav">
            <Avatar image="https://images.careerfoundry.com/public/logo/cf_logo_min_full.svg"/>
            <div className="navLink-wrapper">
                <NavLink to="/orders" activeClassName="link-active" exact={true}>
                        Orders
                </NavLink>
            </div>
        </nav>
    )
};

export default SideNav;