import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <div>
            <nav className ="navbar navbar-expand-sm navbar-dark bg-primary mb-3">
                <div className="container">
                    <a href="/" className="navbar-brand">{ props.branding }</a>
                
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a href="/contact/add" className="nav-link">
                                    <i className="fa fa-plus px-1"></i>
                                    Add Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </div>
    )
}


Header.propTypes = {
    branding: PropTypes.string.isRequired
}
export default Header;