import '../styles/CustomCard.css';

import React from 'react';
import { Link } from 'react-router-dom';

import backgroundImg from '../assets/img/card_bg.png';
import imgHeart from '../assets/img/heart_yellow.svg';
import CustomButton from './CustomButton';

const CustomCard = () => {
    return (
        <div className="card">
            <img src={backgroundImg} alt="Student Image" />
            <div className="card__content">
                <span className="tag">Education</span>
                <h3>Help Azar to continue his study</h3>

                <div className="progress-container">
                    <div className="progress"></div>
                </div>

                <div className="card__info">
                    <div>
                        Goal<p>1234$</p>
                    </div>
                    <div>
                        Collected<p>1234$</p>
                    </div>
                    <div>
                        Remaining<p>1234$</p>
                    </div>
                </div>
                <Link to={'/donation'}>
                    <CustomButton>
                        Donate
                        <img src={imgHeart} alt="Heart" className="card__donation-button" />
                    </CustomButton>
                </Link>
            </div>
        </div>
    );
};

export default CustomCard;
