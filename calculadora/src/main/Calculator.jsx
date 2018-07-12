import React from 'react';

import './Calculator.css';

import Button from './Button';
import Display from './Display';
const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}
class Calculator extends React.Component {
    state = {...initialState}
    
    clearMemory(){
        this.setState({ ...initialState });
    }

    addDigit(n){
        console.log(n)
        if (n === '.' && this.state.displayValue.includes('.')){
            return;
        }
        const clearDisplay = this.state.displayValue === '0'
        || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + n;
        this.setState({ displayValue: displayValue, clearDisplay: false})
    }

    setOperation(op){
        console.log(op);
    }

    render(){
        const addDigit = n => this.addDigit(n);
        const setOperation = n => this.setOperation(n);
        return (
            <div className='calculator'>
                <Display value={this.state.displayValue}/>
                <Button label='AC' tripple onClick={() => this.clearMemory()} />
                <Button label='/' onClick={setOperation} operation/>
                <Button label='7' onClick={addDigit}/>
                <Button label='8'  onClick={addDigit} />
                <Button label='9'  onClick={addDigit} />
                <Button label='*' onClick={setOperation} operation />
                <Button label='4'  onClick={addDigit} />
                <Button label='5'  onClick={addDigit} />
                <Button label='6'  onClick={addDigit} />
                <Button label='-' onClick={setOperation} operation />
                <Button label='1'  onClick={addDigit} />
                <Button label='2'  onClick={addDigit} />
                <Button label='3'  onClick={addDigit} />
                <Button label='+' onClick={setOperation} operation />
                <Button label='0'  onClick={addDigit} double />
                <Button label='.'  onClick={addDigit} />
                <Button label='=' onClick={setOperation} operation />
            </div>
        )
    }
}

export default Calculator;