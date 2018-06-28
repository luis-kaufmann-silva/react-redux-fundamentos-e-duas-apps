import React from 'react';

export default class Field extends React.Component { // or Component
    constructor(props){
        super(props)
        this.state = {
            value: props.initialValue
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev){
        this.setState({
            value: ev.target.value
        })
    }

    render(){
        return (
            <div>
                <label>{this.state.value}</label><br/>
                <input 
                    onChange={this.handleChange} 
                    value={this.state.value}
                />
            </div>
            
        )
    }
}