import {v4 as uuidv4} from 'uuid';
import { useState } from 'react';
import styled from "styled-components";

  const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  `;

  const Input = styled.input`
  width: 500px;
  height: 32px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
  `;

  const Button = styled.button`
  position: relative;
  border: none;
  display: inline-block;
  padding: 15px 30px;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-weight: 500;
  margin-left: 20px;
  `;

function TodoPost () {

  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  }

  const PostBtn = () => {

    fetch('http://localhost:3001/todolists', {
    method: 'POST',
    headers: {
       'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: uuidv4(),
      title: value
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <Form onSubmit={PostBtn}>
      <Input onChange={onChange} value={value} placeholder="Todo..."/>
      <Button type="submit">Do!</Button>
    </Form>
  )
}

export default TodoPost;