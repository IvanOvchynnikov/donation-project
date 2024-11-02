import '../styles/CustomCard.css';

import * as PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import imgHeart from '../assets/img/heart_yellow.svg';
import CustomButton from './CustomButton';

const CustomCard = ({ id, title, category, goal, collected, imageUrl }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} />
            <div className="card__content">
                <span className="tag">{category}</span>
                <h3>{title}</h3>

                <div className="progress-container">
                    <div className="progress" style={{ width: `${(collected / goal) * 100}%` }}></div>
                </div>

                <div className="card__info">
                    <div>
                        Goal<p>{goal}$</p>
                    </div>
                    <div>
                        Collected<p>{collected}$</p>
                    </div>
                    <div>
                        Remaining<p>{goal - collected}$</p>
                    </div>
                </div>
                <Link to={`/donation/${id}`} preventScrollReset={false}>
                    <CustomButton>
                        Donate
                        <img src={imgHeart} alt="Heart" className="card__donation-button" />
                    </CustomButton>
                </Link>
            </div>
        </div>
    );
};
CustomCard.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    goal: PropTypes.number,
    collected: PropTypes.number,
    imageUrl: PropTypes.string,
};
export default CustomCard;
