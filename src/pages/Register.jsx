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
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const background_style = {
        backgroundImage: `url(${imgBackground})`,
    };

    const onSubmit = async (event_) => {
        event_.preventDefault();
        let response = await handleRegister(email, username, password, navigate);
        if (response.status === 200) {
            console.log('Registration successful');
            navigate('/main');
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
                        <CustomInput
                            purpose="Email"
                            value={email}
                            onChange={(event_) => setEmail(event_.target.value)}
                        />
                        <CustomInput
                            purpose="Nickname"
                            value={username}
                            onChange={(event_) => setUsername(event_.target.value)}
                        />
                        <CustomInput
                            purpose="Password"
                            img={imgEye}
                            type="password"
                            value={password}
                            onChange={(event_) => setPassword(event_.target.value)}
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
