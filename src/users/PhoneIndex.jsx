import {  useState } from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './users.css';
import { connect } from 'react-redux';
import {historyDataSend} from '../store/Store';
import { customers } from './setting';


const userLink ={
  border: 'none',
  background: 'none',
  color: '#333399',
  outline: 'none',
  fontWeight: 'bold',
  textDecoration: 'underline',
  
}
const buttonWidth={
  width: '45%',
  marginRight:'5%'
}


 function PcIndex(props){
  const[state,setState] = useState({
    data: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
  })
  /*************APIによるuser一覧**********************************/
   /*async function userCall(){
     
     await axios
       .get('https://uematsu-backend.herokuapp.com/users')
       .then((res)=>{
          localStorage.setItem('users', JSON.stringify(res.data));
          
       })
       .catch((error)=>{
          console.log(error);
       })
       setState({
        data: JSON.parse(localStorage.getItem('users'))
      })
  }
    useState(userCall());*/

  /****************************編集**************************************** */
   const editPage = (id)=>{
     props.editPage(id);
     props.history.push("/users/edit");
   } 


   /****************************削除*********************************************** */
   function deleteUser(i){
    if(window.confirm('削除してよろしいですか？')){
      axios
       .delete(`https://uematsu-backend.herokuapp.com/users/${i}`)
       .then((response)=>{
         alert(response.data.message); 
       })
       .catch((error)=>{
          console.log(error);
       })
    
    }
   }
   const userShowaccess = (id)=>{
    axios
    .get(`https://uematsu-backend.herokuapp.com/history/show/${id}`)
    .then((res)=>{
       const action = historyDataSend(res.data);
       props.dispatch(action);

    })
    .catch((error)=>{
       console.log(error);
    })
     props.history.push('/users_phone_empshow');
   }
 
  return(
    <div className="w-100">
      <div className="text-center mt-5 mb-4">
        <h2 data-testid="usertitle">会員一覧</h2>
      </div>
      <div class="bg-white p-2"></div>
      <div className="w-100 bg-white">
          {state.data.length > 0 ?
            <Table striped bordered hover>
              <tbody>
                {customers(state.data).map((value)=>(
                  <tr key={value.name}>
                    <Table bordered>
                      <tbody>
                        <tr>
                          <th className="text-center align-middle bg-dark text-white">名前</th>
                          <td className="text-center align-middle">
                            <button 
                              style={userLink} 
                              onClick={(i)=>userShowaccess(value.id)}
                            >{value.name}</button>
                          </td>
                        </tr>

                        <tr>
                          <th className="text-center align-middle bg-dark text-white">メールアドレス</th>
                          <td  className="text-center align-middle">
                            {value.email}
                          </td>
                        </tr>

                        <tr>
                            <td colSpan="2">
                              <Button 
                                variant="primary"
                                onClick={(i)=>editPage(value.id)}
                                style={buttonWidth}
                              >編集</Button>

                              <Button 
                                variant="danger"
                                onClick={(i)=>deleteUser(value.id)}
                                style={buttonWidth}
                              >削除</Button>
                          </td>
                        </tr>


                      </tbody>
                    </Table>
                  </tr>
                ))}
              </tbody>
            </Table>
            :
            <div>データなし</div>
            }
      </div>
    </div>
  )
}
export default withRouter(connect((state)=>state)(PcIndex))