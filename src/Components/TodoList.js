import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TodoActions from '../store/actions/todos'

function Todolist({visibility,modules,removerTodo,toggleTodo}){

    return(
        <section className="todoList">
            <ul data-show={visibility}>
                <span>Total de todos: {modules.todos.length}</span>
                {modules.todos.map((item,i)=>(
                    <li key={item.id} completed={item.completed === false ? "false":"true"}>
                        <p>{item.text}</p> 
                        <button onClick={()=>{toggleTodo(item.id)}} remove={item.id}>{item.completed === false ? "Finalizar":"Iniciar"}</button> 
                        <button onClick={()=>{removerTodo(item.id)}}>Remover</button>
                    </li>
                ))}
            </ul>
        </section>
    )
}
const mapStateToProps = (state) => {
    return {
      visibility:state.todos.visibilityTodos,
      modules: state.todos
      
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(TodoActions,dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Todolist);
