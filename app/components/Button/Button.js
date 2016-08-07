import React from 'react';
import Svg from '../Svg';


const Button = ({text, ...props}) => {
    return (
        <button {...props} className="c-button">
            {text}
        </button>
        )
};


/**
 * propTypes
 * @property {string} [text] - The text for the button.
 */
Button.propTypes = {
    text: React.PropTypes.string.isRequired,
};


export default Button;
