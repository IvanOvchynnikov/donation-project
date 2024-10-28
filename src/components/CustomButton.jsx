import '../styles/CustomButton.css';

import * as PropTypes from 'prop-types';
import React from 'react';

const CustomButton = ({ children, style_variant }) => {
    const style_text = {
        backgroundColor: 'inherit',
        color: '#2E4049',
    };

    return (
        <button className="custom__button" style={style_variant === 'text' ? style_text : {}}>
            {children}
        </button>
    );
};
CustomButton.propTypes = {
    children: PropTypes.element,
    style_variant: PropTypes.string,
};

export default CustomButton;
