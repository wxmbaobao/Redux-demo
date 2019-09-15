import React from 'react';
import ReactDOM from 'react-dom';
//import TodoList from './TodoList';
import NewTodoList from './NewTodo/NewTodoList';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<NewTodoList/>, document.getElementById('root'));
serviceWorker.unregister();
