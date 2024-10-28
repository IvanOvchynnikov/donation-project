import '../styles/Footer.css';

import React from 'react';

import imgFacebook from '../assets/img/facebook.png';
import imgInsta from '../assets/img/insta.svg';
import imgLogo from '../assets/img/logo.svg';
import imgTwitter from '../assets/img/twitter.svg';
import imgYoutube from '../assets/img/youtube.svg';

const Footer = () => {
    return (
        <div className="footer">
            <span>
                <img src={imgLogo} alt="truzyb" />
                help.Ukraine
            </span>
            <div className="footer__nav">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Join us</a>
                <a href="#">Contact</a>
                <a href="#">Help</a>
                <a href="#">Privacy</a>
            </div>
            <div className="footer__info">
                <span>
                    <a href="https://twitter.com">
                        <img src={imgTwitter} alt={'Twitter logo'} />
                    </a>
                    <a href="https://facebook.com">
                        <img src={imgFacebook} alt={'Facebook logo'} />
                    </a>
                    <a href="https://youtube.com">
                        <img src={imgYoutube} alt={'Youtube logo'} />
                    </a>
                    <a href="https://instagram.com">
                        <img src={imgInsta} alt={'Insta logo'} />
                    </a>
                </span>
                <p>© 2023 help.Ukraine. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
