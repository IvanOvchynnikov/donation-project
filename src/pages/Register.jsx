import '../styles/Login.css';
import '../styles/Register.css';

import React from 'react';

import imgEye from '../assets/img/eye.svg';
import imgTruzyb from '../assets/img/truzyb.svg';
import imgBackground from '../assets/img/ukraine_background.png';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

const Register = () => {
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
                    <h2>Register</h2>
                    <CustomInput purpose="Email" />
                    <CustomInput purpose="Nickname" />
                    <CustomInput purpose="Password" img={imgEye} />
                    <p>At least 8 characters, including letters</p>
                    <CustomButton>Log in</CustomButton>
                    <div className="separator">
                        <span>or</span>
                    </div>
                    <p className="register__window_right__have">
                        Already have an account? <a href="#">Log in</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
