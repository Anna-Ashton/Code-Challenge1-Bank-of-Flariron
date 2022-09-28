import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransaction] = useState([]);
  const[newTransaction, setNewTransaction] = useState([]);
  //const[initial, setInitial]=useState[0]
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((res) => res.json())
      .then((result) =>  {
        setNewTransaction(result)
        setTransaction(result)})
      .catch((err) => console.log(err));
      
      
  }, []);
  console.log(transactions);

  // useEffect(() => {
  //   fetch("http://localhost:8001/transactions")
  //     .then((res) => res.json())
  //     .then((result) => setTransaction((transactions) => result))
  //     .catch((err) => console.log(err));
  // }, []);

  // let haveListTransact=transAct.map((transfer)=>{
  //   return(
  //     <tr key={index}>{transfer}</tr>
  //   )
  // })

  return (
    <div>
      <Search newTransaction={newTransaction} setTransaction={setTransaction}/>
      <AddTransactionForm setTransaction={setTransaction}/>
      <TransactionsList transactions={transactions}></TransactionsList>
    </div>
  );
}

export default AccountContainer;
