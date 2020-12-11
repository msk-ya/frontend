import React, { useState } from 'react';
import { Row, Col, Form, Button, Table } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

const table ={
  width: '100%',
  border: '1px solid #c0c0c0'
}
const select={
  width:'30%',
  height:'40px'
}

/**************************************************************************************** */

const  Show = (props)=>{
  const stockOption = ()=>{
    let array = []
    for(let i=1; i<=Number(props.itemData.stock); i++){
       array.push(i)
    }
    return array
  }
  return(
   <>
      <div className="text-center mt-5 mb-4  font-weight-bold">
        <h2 className="font-weight-bold text-info">{props.itemData.name}注文</h2>
      </div>
      <Row>
        <Col md={{ span: 8, offset: 2 }} className="pt-3 pl-5 pr-5 pb-4 bg-light shadow">
          <Row>
             <Table  style={table}>
               <thead>
                 <th className="bg-dark text-center text-white">商品名</th>
                 <th className="bg-dark text-center text-white">価格</th>
                 <th className="bg-dark text-center text-white">買い上げ数</th>
                 <th className="bg-dark text-center text-white">加工法</th>
                 <th className="bg-dark text-center text-white">合計金額</th>
               </thead>
               <tbody>
                 <tr>
                   <td className="font-weight-bold text-center align-middle">{props.itemData.name}</td>
                   <td className="font-weight-bold text-center align-middle">{props.itemData.price}</td>
                   <td className="font-weight-bold text-center">
                     <select style={select}>
                       {stockOption().map((num)=>(
                         <option>{num}</option>
                       ))}
                     </select>
                   </td>
                   <td className="font-weight-bold text-center align-middle"></td>
                   <td className="font-weight-bold text-center align-middle"></td>
                 </tr>
               </tbody>
             </Table>
          </Row>  
        </Col>    
      </Row>
   </>
  )
}
export default withRouter(connect((state)=>state)(Show))