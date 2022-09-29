//import React, { useState } from "react";

function Transaction({
  id,
  date,
  description,
  category,
  amount,
  setTransaction,
}) {
  // const [data, setData]=useState({date:"",description(""),category(""),amount(0)});
  function handleData(e) {
    // setData((data))
    console.log(e);
    fetch(`http://localhost:8001/transactions/${id}`, {
      method: "DELETE",
    });
    setTransaction((prev) => {
      return prev.filter((obj) => {
        return (obj.id !==id)
      });
    });
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
