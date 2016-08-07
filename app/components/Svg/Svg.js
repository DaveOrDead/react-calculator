import React from 'react';


const Svg = ({path, classList, ...props}) => {
    return (
        <svg {...props} className={classList}>
            <use xlinkHref={'#' + path} />
        </svg>
        )
};


/**
 * propTypes
 * @property {string} classList - List of classes to append.
 * @property {string} [path] - The id of the icon to reference.
 */
Svg.propTypes = {
    classList: React.PropTypes.string,
    path: React.PropTypes.string.isRequired
};


export default Svg;
