import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { handleRegister } from '../api/RegisterApi';
import imgEye from '../assets/img/eye.svg';
import imgTruzyb from '../assets/img/truzyb.svg';
import imgBackground from '../assets/img/ukraine_background.png';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

const Register = () => {
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const background_style = {
        backgroundImage: `url(${imgBackground})`,
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        let response = await handleRegister(email, nickname, password);
        if (response && response.status === 201) {
            console.log('Registration successful');
            navigate('/');
        }
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
                    <form onSubmit={onSubmit}>
                        <CustomInput purpose="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        <CustomInput
                            purpose="Nickname"
                            value={nickname}
                            onChange={(event) => setNickname(event.target.value)}
                        />
                        <CustomInput
                            purpose="Password"
                            img={imgEye}
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <p>At least 8 characters, including letters</p>
                        <CustomButton type="submit">Sign up</CustomButton>
                    </form>
                    <div className="separator">
                        <span>or</span>
                    </div>
                    <p className="login__window_right__p">
                        Already have an account?{' '}
                        <Link to={'/login'} preventScrollReset={true}>
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
