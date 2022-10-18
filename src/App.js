import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TodoPost from './component/TodoPost.js';
import TodoList from './component/TodoList.js';


function App() {

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand className="brand">Todo List!</Navbar.Brand>
        </Container>
      </Navbar>
      <TodoPost />
      <TodoList />
    </div>
    )
  }

export default App;
