// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import '../style/App.css';
import Addtask from './Addtask';
import Demo from "../mock/AppMock";


  class TodoApp extends React.Component {
  state = {
    todos: [],
  }
  addtodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
      })
  }  
   render(){
      return(
        <figure className="position-relative">
         
    <div className="div_class">
        <h1 >{this.props.Content.heading} </h1><br/><br/>
        <div >
       <Addtask addtodo={this.addtodo} />
    </div>
     </div>
     </figure>
    );
      }
  }
  TodoApp.defaultProps={Content: Demo}
  export default TodoApp;