import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { inc, dec, stepChange } from 'root/actions';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render(){
        return (
            <div>
                <label>Step:</label>
                <input type="text" onChange={this.props.stepChange} value={this.props.counter.step} />
                <div>
                    Count: {this.props.counter.number}
                </div>
                <button onClick={this.props.inc}>INC</button>
                <button onClick={this.props.dec}>DEC</button>
            </div>
        )
    }
}


const mapStateToProps = state => ({counter: state.counter})

const mapDispatchToProps = dispatch => bindActionCreators({
    inc,
    dec,
    stepChange
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter);