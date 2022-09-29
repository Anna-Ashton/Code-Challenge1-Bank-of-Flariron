import React from "react";

function Transaction({
  id,
  date,
  description,
  category,
  amount,
  setTransaction,
}) {
  
  function handleData(e) {
   
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
