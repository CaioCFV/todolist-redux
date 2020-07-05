import React,{useState,useEffect} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store'

//components
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';
import TodoControls from './Components/TodoControls';



function App (){
    const [title,setTitle] = useState('');
    const [showContent,setShowContent] = useState('')

    useEffect(()=>{
      setTimeout(()=>{
        setShowContent(()=>'on')
      },1000)
    },[])

    function setMyTitle(e){
      e.preventDefault();
      setShowContent(()=>'off');

    }

    function handleTitle(e){
      const text = e.target.value
      setTitle(()=>text);
    }
    return(
      
      <Provider store={store}>
          <div className="container-title-set" show={showContent}>
            <form onSubmit={setMyTitle}>
              <h1>Qual é o título da lista ?</h1>
              <input type="text" onChange={handleTitle} value={title}/>
              <button type="submit">Ok</button>
            </form>
          </div>
          <section className="todo-container">
              <h1>{title}</h1>
                <AddTodo />
                <TodoList />
                <TodoControls />
          </section>
      </Provider>
    )
}



export default App;


















//const mapDispatchToProps = dispatch => bindActionCreators(dispatch)


// const mapDispatchToProps = (dispach) => { dispatch vem do connect e vc recebe como parametro
// return {
//     removeTodo: () => dispach((id)=id>),
//     finishTodo: () => console.log('finish')
// }
// }

// Connect(primeiro parametro,segundo parametro)

// Primeiro parametro é uma funçao que tem por parametro o state que vamos    receber e tem como retorno oq eu quero daquele state ou seja:

//  function (oqeutenhoprareceber){
//    return oq eu quero
// }

// O segundo parametro de connect é uma funçao que retorna nossos dispatchs
// ou seja:

// function (){
//     return{
//         adicionarTodo: (id,todo) => dispatch()
//     }
// }

// dentro do nosso componente nos vamos receber as funcoes em formato de objeto para serem usadas