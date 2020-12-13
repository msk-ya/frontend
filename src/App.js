import React, { useState } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./App.css";
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faUser } from "@fortawesome/free-solid-svg-icons";
import Index from './users/Index';
import Login from './Login';
import userNew from './users/New'
import Edit from './users/Edit'
import UserShow from './users/Show';
import ItemIndex from './items/Index';
import ItemNew from './items/New';
import ItemEdit from './items/Edit';
import Process from './items/Process';
import OrderIndex from './orders/Index';
import OrderNew from './orders/New';
import OrderEdit from './orders/Edit';
import CustomorIndex from './customer/Index'
import CustomorShow from './customer/Show'
import { connect } from "react-redux";
import { logoutAction } from './store/Store';


 function App(props){
  const[state, setState] = useState({
    editId: 0,
    deleteId: 0,
    itemEditId:0,
    processId: 0,
    OrderEditId: 0,
    customerItem: null
  })
  const userlogout = ()=>{
    let action = logoutAction();
    props.dispatch(action);
    
  }
  const getEditId = (id)=>{

    setState({
      editId: id,
      deleteId: state.deleteId,
      itemEditId: state.itemEditId,
      processId: state.processId,
      OrderEditId: state.OrderEditId,
      customerItem: state.customerItem
    })
  }
  const getItemEditId = (item)=>{

    setState({
      editId: state.editId,
      deleteId: state.deleteId,
      itemEditId: item,
      processId: state.processId,
      OrderEditId: state.OrderEdit,
      customerItem: state.customerItem
    })
  }
  const getProcessId = (item)=>{

    setState({
      editId: state.editId,
      deleteId: state.deleteId,
      itemEditId: state.itemEditId,
      processId: item,
      OrderEditId: state.OrderEdit,
      customerItem: state.customerItem
    })
  }
  const getOrderEditId = (id)=>{

    setState({
      editId: state.editId,
      deleteId: state.deleteId,
      itemEditId: state.itemEditId,
      processId: state.processId,
      OrderEditId: id,
      customerItem: state.customerItem
    })
  }
  /*お客様買うボタンより*/
  const customerItem = (item)=>{
    setState({
      editId: state.editId,
      deleteId: state.deleteId,
      itemEditId: state.itemEditId,
      processId: state.processId,
      OrderEditId: state.OrderEditId,
      customerItem: item
    })
  }
  /*ストック数およびお買い物リストの更新*/
  const changeItem =(item)=>{
    setState({
      editId: state.editId,
      deleteId: state.deleteId,
      itemEditId: state.itemEditId,
      processId: state.processId,
      OrderEditId: state.OrderEditId,
      customerItem: item
    })
   
  }
  
  return(
    <BrowserRouter>
    <div className='fixed-top'>
     <Navbar fill  bg="dark">
        <Navbar.Brand href="#home"　className="text-white font-weight-bold">
          <FontAwesomeIcon icon={faUtensils} />&nbsp;
            加工依頼アプリ
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Item className="text-light">
            {props.userData.length >0
                  ?<span className="font-weight-bold text-warning"><FontAwesomeIcon icon={faUser} />{props.userData[0].name}さん</span>
            : 
            ''
            }</Nav.Item>
          <Nav.Item><Link to="/customor/index" className="text-light p-3">お買い物</Link></Nav.Item>
          <Nav.Item><Link to="/" className="text-light p-3">HOME</Link></Nav.Item>
          <Nav.Item><Link to="/items" className="text-light p-3">商品一覧</Link></Nav.Item>
          <Nav.Item><Link to="/orders" className="text-light p-3">店頭商品一覧</Link></Nav.Item>
        </Nav>
        
        <Nav className="mr-right">
          {props.userData.length >0? 
           <Nav.Item>
             <button 
              className="logout"
              onClick={userlogout}
              data-testid="logintrue"
            >ログアウト</button>
           </Nav.Item>
          : 
          <Nav.Item><Link to="/login" className="text-light p-3" data-testid="loginfalse">ログイン</Link></Nav.Item>
          }
         
        </Nav>
      </Navbar>
      </div><br/>
      <Route exact path="/" render={()=><Index editIdget={(id)=>getEditId(id)} />} /> 
      <Route path="/login" render={()=><Login />} />
      <Route path="/users/new" component={userNew} />
      <Route path="/users/edit" render={ () => <Edit id={state.editId} />} />
      <Route path="/users/show" component={UserShow} />
      <Route path="/items"  render={()=><ItemIndex 
        itemEditIdget={(item)=>getItemEditId(item)} 
        processIdget={(item)=>getProcessId(item)}
        />} />
      <Route path="/items_new" component={ItemNew} />
      <Route path="/items_process" render={ () => <Process item={state.processId} />}  />
      <Route path="/items_edit" render={ () => <ItemEdit item={state.itemEditId} />}  />
      <Route path="/orders" render={()=><OrderIndex orderEditIdget={(id)=>getOrderEditId(id)} />} />
      <Route path="/orders_new" component={OrderNew} />
      <Route path="/orders_edit" render={ () => <OrderEdit id={state.OrderEditId} />} />
      <Route path="/customor/index"  
        render={()=>
        <CustomorIndex 
          sendCustomerData={(item)=>customerItem(item)} 
          fixItemData={state.customerItem}
        />} />
      <Route path="/customor_show" 
      render={()=>
        <CustomorShow 
          itemData={state.customerItem}
          changeItemData={(item)=>changeItem(item)}
      />} />
    </BrowserRouter>
  )
}
export default connect((state)=>state)(App)



/*
componentDidMount() {
    const fetchInit = {
      method: "GET",
      headers: { "content-type": "application/json" }
    };

    fetch(new URL(process.env.REACT_APP_SERVER_URL), fetchInit)
      .then(response => response.json())
      .then(response => this.setState(response));
  }
*/