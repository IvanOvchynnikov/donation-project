import '../styles/CustomInput.css';

import * as PropTypes from 'prop-types';
import React from 'react';

const CustomInput = ({ purpose, img }) => {
    return (
        <div className="input-container">
            <label htmlFor={purpose}>{purpose}</label>
            <input type="text" id={purpose} placeholder={purpose} />
            {img && <img src={img} className="icon" alt={purpose}></img>}
        </div>
    );
};

CustomInput.propTypes = {
    purpose: PropTypes.string,
    img: PropTypes.string,
};

export default CustomInput;
