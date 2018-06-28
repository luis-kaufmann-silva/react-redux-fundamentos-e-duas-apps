import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IconButton from 'components/iconbutton';

import 'root/todo/custom.css';

import { markAsDone, markAsPending, removeItem } from 'root/todo/actions';

const TodoList = props => {
    const list = props.list || [];
    return (
        <div>
            {list.map((todo) => (
                <div 
                    key={todo._id} 
                    className={'item ' + (todo.done ? 'marked-as-done' : '')}
                >
                    <div className='flex1'>
                        {todo.description}
                    </div>
                    <IconButton
                        style='success'
                        icon='check'
                        hide={todo.done}
                        onClick={() => props.markAsDone(todo)}
                    />

                    <IconButton
                        style='warning'
                        icon='undo'
                        hide={!todo.done}
                        onClick={() => props.markAsPending(todo)}
                    />

                    <IconButton
                        style='danger'
                        icon='trash-o'
                        hide={!todo.done}
                        onClick={() => props.removeItem(todo)}
                    />



                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    list: state.todo.list
})

const mapDispatchAsProps = dispatch => bindActionCreators({
    markAsDone,
    markAsPending,
    removeItem
}, dispatch)

export default connect(mapStateToProps, mapDispatchAsProps)(TodoList);