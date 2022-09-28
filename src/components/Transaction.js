//import React, { useState } from "react";

function Transaction({date, description, category, amount}) {
  // const [data, setData]=useState({date:"",description(""),category(""),amount(0)});
  function handleData(e){
    // setData((data))
    console.log(e)
  }
//let dataPresent=data.map((elem,index)=>{
  return (
    <tr onClick={handleData}>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}


  

export default Transaction;
