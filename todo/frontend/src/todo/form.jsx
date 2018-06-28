import React from 'react';
import Grid from 'components/grid';
import IconButton from 'components/iconbutton';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { changeDescription, search, add, clear } from 'root/todo/actions';

class TodoForm extends React.Component {
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this);
    }
    keyHandler(e) {
        const { add, clear, search, description } = this.props;
        if (e.key === 'Enter'){
            console.log(e.shiftKey)
            e.shiftKey ? search() : add(description);
        }else if (e.key === 'Escape'){
            clear()
        }
    }

    componentWillMount(){
        this.props.search();
        console.log('Componente will mount')
    }

    render(){
        const { add, clear, search, description } = this.props;
        return (
            <div role='form' className='todoForm row'>
                <Grid cols='12 9 10'>
                    <input 
                        type="text"
                        id='description' 
                        className='form-control' 
                        placeholder='Adicione uma tarefa'
                        onKeyUp={this.keyHandler}
                        onChange={this.props.changeDescription}
                        value={this.props.description}
                    />
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton 
                        onClick={(e) => clear()}
                        icon='close' 
                        style='default'
                    />
                    <IconButton 
                        onClick={(e) => add(e.target.value)}
                        hide={false} 
                        icon='plus' 
                        style='primary'
                    />
                    <IconButton 
                        onClick={search}
                        icon='search' 
                        style='primary'
                    />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators({
    changeDescription,
    search,
    add,
    clear
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)