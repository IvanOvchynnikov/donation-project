import '../styles/Navbar.css';

import React from 'react';
import { Link } from 'react-router-dom';

import imgLogo from '../assets/img/logo.svg';
import CustomButton from './CustomButton';

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="navbar__left">
                    <div className="navbar__left_logo">
                        <img src={imgLogo} alt="logo" className="navbar__left__logo__img" />
                        <p className="navbar__left_logo__text">help.Ukraine</p>
                    </div>
                    <a className={'navbar__left__about'} href="#">
                        About
                    </a>
                    <a className={'navbar__left__donations'} href="#">
                        Donations
                    </a>
                    <a className={'navbar__left__contact'} href="#">
                        Contact us
                    </a>
                </div>
                <div className="navbar__right">
                    <Link to={'/login'}>
                        <CustomButton style_variant="text">Log in</CustomButton>
                    </Link>
                    <Link to={'/donation'}>
                        <CustomButton>Donate</CustomButton>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
