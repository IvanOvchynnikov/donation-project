import '../styles/CustomInput.css';

import * as PropTypes from 'prop-types';
import React, { useState } from 'react';

const CustomInput = ({ purpose, img }) => {
    const [type, setType] = useState('text');

    function make_visible(event_, purpose) {
        event_.preventDefault();
        if (purpose === 'Password') {
            if (type === 'password') {
                setType('text');
            } else {
                setType('password');
            }
        }
    }

    return (
        <div className="input-container">
            <label htmlFor={purpose}>{purpose}</label>
            <input type={type} id={purpose} placeholder={purpose} />
            {img && (
                <img src={img} className="icon" alt={purpose} onClick={(event_) => make_visible(event_, purpose)} />
            )}
        </div>
    );
};

CustomInput.propTypes = {
    purpose: PropTypes.string,
    img: PropTypes.string,
};

export default CustomInput;
