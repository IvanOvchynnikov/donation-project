import '../styles/Login.css';

import React from 'react';
import { Link } from 'react-router-dom';

import imgEye from '../assets/img/eye.svg';
import imgMail from '../assets/img/mail.svg';
import imgTruzyb from '../assets/img/truzyb.svg';
import imgBackground from '../assets/img/ukraine_background.png';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

const Login = () => {
    const background_style = {
        backgroundImage: `url(${imgBackground})`,
    };
    return (
        <div className="login" style={background_style}>
            <div className="login__window">
                <div className="login__window__left">
                    <span>
                        <img src={imgTruzyb} alt="Ukrainian Truzyb" />
                        Help Ukraine
                    </span>
                    <p>Help those in need. Forward to Victory!</p>
                </div>
                <div className="login__window__right">
                    <h2>Authorize</h2>
                    <CustomInput purpose="Nickname" img={imgMail} />
                    <CustomInput purpose="Password" img={imgEye} />
                    <p>At least 8 characters, including letters</p>
                    <CustomButton>Log in</CustomButton>
                    <div className="separator">
                        <span>or</span>
                    </div>
                    <p>
                        Do not have an account? <Link to={'/register'}>Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
