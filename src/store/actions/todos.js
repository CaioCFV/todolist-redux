//ACTION TYPES

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const SET_VISIBLE = {
    SHOW_ALL:'SHOW_ALL',
    SHOW_COMPLETE:'SHOW_COMPLETE',
    SHOW_INCOMPLETE:'SHOW_INCOMPLETE'
}

export function adicionarTodo(text,id){
    return {
        type: ADD_TODO,
        id: id,
        text: text
    }
}

export function removerTodo(id){
    return {
        type: REMOVE_TODO,
        id: id
    }
}


export function toggleTodo(id){
    return {
        type: TOGGLE_TODO,
        id: id
    }
}

export function setVisibility(text){
    return{
        type:SET_VISIBLE,
        text:text
    }
    
}