import React,{useState} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as TodoActions from '../store/actions/todos'


function AddTodo ({adicionarTodo}){
    const [text,setText] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        const id = Math.round(Math.random()*500);
        adicionarTodo(text,id);
        setText(()=>'');
    }

    function handleText(e){
        const text = e.target.value
        setText(()=>text);
    }
    
    return(
        
        <section className="addTodo">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleText} value={text}placeholder="Adicione um todo..."/>
                <button type="submit">Adicionar</button>
            </form>
        </section>
    )
}

const mapDispatchToProps = dispatch => 
    bindActionCreators(TodoActions,dispatch);

export default connect(
    null
    ,mapDispatchToProps)(AddTodo);

