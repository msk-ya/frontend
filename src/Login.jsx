import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import './App.css'
import { withRouter } from 'react-router'
import { useStore } from 'react-redux';

const  Login = (props)=>{

  const[state, setState] = useState({
    email: '',
    password: ''
  })

  const newUserComponent = ()=>{
    props.history.push('/users/new');  
  }
  const accesslogin = (e)=>{
    e.preventDefault();
    alert(JSON.stringify(state));
  }
  const inputText = (e)=>{
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setState({...state, [name]:value});
  }
  return(
   <>
    <div className="text-center mt-5 mb-4">
        <h2>ログイン</h2>
      </div>
      <Row>
        <Col md={{ span: 4, offset: 4 }} className="p-5 bg-light shadow">
          <Form onSubmit={accesslogin}>
            <Form.Group>
              <Form.Label>メールアドレス</Form.Label>
              <Form.Control 
                type="email" 
                name="email"
                placeholder="(例)sample@example.com" 
                className="h8" 
                onChange={inputText}
                value={state.email}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>パスワード</Form.Label>
              <Form.Control
                 type="password" 
                 name="password"
                 placeholder="(例)password" 
                 onChange={inputText}
                 value={state.password}
              />
            </Form.Group>

              <Button 
                type="submit" 
                variant="primary" 
                className="btn-block mt-4">
                  送信
              </Button>

              <Button 
                variant="primary" 
                onClick={newUserComponent}
                className="btn-block mt-3">
                新規登録
              </Button>
          </Form>
          
        </Col>
      </Row>
   </>
  )
}
export default withRouter(Login)