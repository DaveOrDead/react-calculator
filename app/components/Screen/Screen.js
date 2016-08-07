import React from 'react';


const Svg = ({path, classList, ...props}) => {
    return (
        <svg {...props} className={classList}>
            <use xlinkHref={'#' + path} />
        </svg>
        )
};

export default Svg;
