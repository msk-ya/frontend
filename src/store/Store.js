import { createStore } from "redux";

let init_data ={
  userData: [],
  buyCarts: [],
  historyData: null
}

const storeReducer = (state = init_data, action)=>{
  switch (action.type) {
    case 'LOGIN':
      return loginReducer(state, action);
    case 'LOGOUT':
      return logoutReducer(state, action);
    case 'CARTADD':
      return cartReducer(state, action);
    case 'CARTRESET':
      return cartResetReducer(state, action);
    case 'CARTDELETE':
      return cartDeleteReducer(state, action);
    case 'USERHISTORY':
      return userHistoryReducer(state, action);  
    default:
      return state
  }
}
/**************[-----redux処理---------]*********************************************************************** */
const loginReducer = (state, action)=>{
  let newData = state.userData.slice();
  newData.splice(0);
  newData.push(action.user);
 
  return{
    userData: newData,
    buyCarts: state.buyCarts,
    history: state.history
  }
}
const logoutReducer =(state, action)=>{
    let newData = state.userData.slice();
    newData.splice(0);
    return{
      userData: newData,
      buyCarts: state.buyCarts,
      history: state.history
    }
  }
const cartReducer = (state, action)=>{
  let data = state.buyCarts.slice();
  data.push(action.data);
  
  return{
    userData: state.userData,
    buyCarts: data,
    history: state.history
  }
}
const cartResetReducer = (state, action)=>{
  let data = state.buyCarts.slice();
  data.splice(0);
  return{
    userData: state.userData,
    buyCarts: data,
    history: state.history
  }
}
const cartDeleteReducer = (state, action)=>{
  let datas = state.buyCarts.slice();
  datas.splice(action.num, 1);
  return{
    userData: state.userData,
    buyCarts: datas,
    history: state.history
  }
}

const userHistoryReducer = (state, action)=>{
  let history = action.data;
  alert(JSON.stringify(history));
  return{
    userData: state.userData,
    buyCarts: state.buyCarts,
    historyData: history
  }
}
/**************[-----コンポーネント送受メソッド処理---------]*********************************************************************** */
export  const sendLoginData = (user)=>{
  return{
    type:'LOGIN',
    user: user
  };
}
export const logoutAction =()=>{
  return{
    type: 'LOGOUT'
  }
}
export const cartsAdd = (item)=>{
  return{
    type: 'CARTADD',
    data: item
  }
}
export const cartEmpty = ()=>{
  return{
    type: 'CARTRESET'
  }
}
export const cartDeleteCart = (index)=>{
  return{
    type: 'CARTDELETE',
    num: index
  }
}
export const historyDataSend = (data)=>{
  return{
    type: 'USERHISTORY',
    data: data
  }
}
export default createStore(storeReducer)