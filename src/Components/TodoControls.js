import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TodoActions from './../store/actions/todos';

function TodoControls ({setVisibility}){
    const {SHOW_ALL,SHOW_COMPLETE,SHOW_INCOMPLETE} = TodoActions.SET_VISIBLE;
    return(
        <section className="todoControls">
            <button onClick={()=>{setVisibility(SHOW_ALL)}}>Mostrar todas</button>
            <button onClick={()=>{setVisibility(SHOW_COMPLETE)}}>Mostra completas</button>
            <button onClick={()=>{setVisibility(SHOW_INCOMPLETE)}}>Mostrar Inconpletas</button>
        </section>
    )
}



const mapDispatchToProps = dispatch =>
        bindActionCreators(TodoActions,dispatch);


export default connect(null,mapDispatchToProps)(TodoControls);