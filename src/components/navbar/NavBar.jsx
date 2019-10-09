import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.scss';

const navbar = (props) => {
    return ( 
    <div className="nav-container">
        <div className="nav-container__logo">
            <h3 className="nav-container__logo--text"><Link to="/profile">Terah</Link></h3>
        </div>
        <ul className="nav-container__list">
            <li className="nav-container__list--item"><NavLink to="/profile" className="nav-container__list--link">Profile</NavLink></li>
            <li className="nav-container__list--item"><NavLink to="/skills" className="nav-container__list--link">Skills</NavLink></li>
            <li className="nav-container__list--item"><NavLink to="/projects" className="nav-container__list--link">Projects</NavLink></li>
            <li className="nav-container__list--item"><NavLink to="/contact" className="nav-container__list--link">Contact</NavLink></li>
        </ul>
    </div>
     );
}
 
export default navbar;