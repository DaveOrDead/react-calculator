import React from 'react';


const Screen = ({number, ...props}) => {
    return (
        <div {...props} className="c-screen">
            {number}
        </div>
        )
};


/**
 * propTypes
 * @property {string} [number] - The number to display on the screen.
 */
Screen.propTypes = {
    number: React.PropTypes.string.isRequired,
};


export default Screen;
