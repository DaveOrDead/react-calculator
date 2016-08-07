import React from 'react';
import Svg from '../Svg';

const Button = ({text, ...props}) => {
    return (
        <button
            {...props}
            className="c-button"
        >
            {text}
        </button>
        )
};

export default Button;
