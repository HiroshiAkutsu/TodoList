import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addTodo } from '../actions/actions';

let AddTodo = ({dispatch}: {dispatch: Dispatch<{}>}) => {
    let input: HTMLInputElement | null;
    return (
        <div>
            <form 
                onSubmit={e => {
                    e.preventDefault();
                    if (input === null) {
                        throw Error('テキストボックスが参照できません。');
                    }
                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(addTodo(input.value));
                    input.value = '';
                }}
            >
                <input ref={node => {input = node; }}/>
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    );
};
const WrapAddTodo = connect()(AddTodo);
export default WrapAddTodo;