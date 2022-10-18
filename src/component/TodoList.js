import { useState, useEffect } from 'react';
import styled from "styled-components";

const Todobox = styled.div`
text-align: center;
font-size: 30px;
margin-top: 50px;
`;

const Todoul = styled.ul`
width: fit-content;
margin: 0 auto;
margin-bottom: 20px;
`;

const Todoli = styled.li`
margin-top: 20px;
font-size: 23px;
text-shadow: 2px 2px 5px blueviolet;
`;

const Button = styled.button`
position: relative;
border: none;
display: inline-block;
padding: 15px 30px;
border-radius: 15px;
box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
text-decoration: none;
font-size: 15px;
font-weight: 500;
margin-left: 20px;
`;

function TodoList() {

  const [todo, setTodo] = useState([])

  useEffect(() => {
      fetch('http://localhost:3001/todolists',{ 
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        setTodo(data)
      })
      .catch(err => {
        console.log(err);
      })
  },[])

  const DeleteBtn = (id) => {
    fetch("http://localhost:3001/todolists/" + id, {
      method: "DELETE",
    }).then(window.location.reload());
  };

  return (
    <Todobox>
    <Todoul>
      {
        todo.map(el =>
          <Todoli className="todoli" key={el.id}>{el.title}
          <Button onClick={() => DeleteBtn(el.id)}>삭제</Button>
          </Todoli>)
      }
    </Todoul>
  </Todobox>
  )
}

export default TodoList;