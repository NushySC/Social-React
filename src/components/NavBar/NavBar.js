import React from 'react';

const NavBar = (props) => {
    return (
        <nav className="nav">
            <ul className="nav__items-1">
                <li className="nav__links">Overview</li>
                <li className="nav__links">Social Profiles<sup>1</sup></li>
                <li className="nav__links">Hashtags</li>
                <li className="nav__links">Mentions</li>
                <li className="nav__links">Brands</li>
            </ul>
            <ul className="nav__items-2">
                <li className="nav__links">Collections</li>
                <li className="nav__links">Internal Notes</li>
            </ul>
        </nav>
    )
}

export default NavBar