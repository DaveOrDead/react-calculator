import React from 'react';
import {render} from 'react-dom';
import Calculator from './app/components/Calculator';

const renderApp = () => {

    render(
        <Calculator />,
        document.getElementById('app')
    );
};

renderApp();
