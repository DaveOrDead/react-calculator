import React from 'react';

// Utils
import add from '../../utils/add';
import subtract from '../../utils/subtract';
import divide from '../../utils/divide';
import multiply from '../../utils/multiply';

// Components
import Button from '../Button';
import Screen from '../Screen';


class Calculator extends React.Component {
    constructor() {
        super();
        this.updateNumber = this.updateNumber.bind(this);
        this.pickFunction = this.pickFunction.bind(this);

        this.state = {
            currentFunction: '',
            typedNumber: '',
            storedNumber: '0',
        };
    }

    updateNumber(e) {
        this.setState({
            typedNumber: this.state.typedNumber += e.target.value
        })

        if(this.state.typedNumber === '80085') {
            console.log('Boobs!');
        }

        if(this.state.typedNumber === '8008135') {
            console.log('Boobies!');
        }
    }

    calculate(type, x, y) {
        let total;

        if(type === 'Add') {
            total = add(x,y)
        }
        else if(type === 'Subtract') {
            total = subtract(x,y)
        }
        else if(type === 'Multiply') {
            total = multiply(x,y)
        }
        else if(type === 'Divide') {
            total = divide(x,y)
        }
        return total;
    }

    pickFunction(e) {
        let total;

         if (this.state.currentFunction === 'Equals' && !this.state.typedNumber) {
            // I think this is where the magic has to happen
        }

        if (e.target.value === 'Clear') {
            total = '0'
        }

        else if (this.state.storedNumber === '0') {
            // Set up first number and function
            total = this.state.typedNumber;
        } else {
           // Do calculation
            total = this.calculate(
                        this.state.currentFunction,
                        Number(this.state.storedNumber),
                        Number(this.state.typedNumber)
                    );
        }

       this.setState({
            storedNumber: total.toString(),
            currentFunction: e.target.value,
            typedNumber: ''
        });
    }

    render() {
        return (
            <div className="c-calculator">

                <Screen number={this.state.typedNumber || this.state.storedNumber} />

                <div className="l-grid">
                    <div className="l-grid__item">
                        <div className="c-keys">
                            {keys.map(i =>
                                (<Button text={i} value={i} onClick={this.updateNumber}/>)
                            )}
                        </div>
                    </div>
                    <div className="l-grid__item">

                         <div className="c-functions">
                            {calculatorFunctions.map(i =>
                                (<Button text={i.icon} value={i.value} onClick={this.pickFunction}/>)
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};


export default Calculator;
