import {ADD_TODO,REMOVE_TODO,TOGGLE_TODO,SET_VISIBLE} from '../actions/todos';
import {combineReducers} from 'redux';




const {SHOW_ALL} = SET_VISIBLE;

function visibilityTodos(state=SHOW_ALL,action){
    switch(action.type){
        case SET_VISIBLE:
            return action.text
        default:
            return state;
    }
}

function todos(state=[],action){
    switch(action.type){
        case ADD_TODO:
            return [...state,{id:action.id,text:action.text,completed:false}];

        case REMOVE_TODO:
            const filtered = state.filter((item,i)=>
                item.id !== action.id
            )
            return filtered;

        case TOGGLE_TODO:
            const toggled = state.map((item,i)=>(
                item.id === action.id ?
                {...item,completed:!item.completed}:
                item
            ))
            return toggled;

        default:
            return state;
    }
}

const todoApp = combineReducers({
    visibilityTodos,
    todos,
})

export default todoApp;