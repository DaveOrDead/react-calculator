import React from 'react';


const Screen = ({number, ...props}) => {
    return (
        <div
            {...props}
            className="c-screen"
        >
            {number}
        </div>
        )
};

export default Screen;
