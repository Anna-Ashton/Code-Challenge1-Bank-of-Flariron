import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransaction] = useState([]);
  const[newTransaction, setNewTransaction] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((res) => res.json())
      .then((result) =>  {
        setNewTransaction(result)
        setTransaction(result)})
      .catch((err) => console.log(err));
      
      
  }, []);
  console.log(transactions);

  function handleSort(e) {
    let criteria = e.target.textContent.toLowerCase();
    function findDiff( a, b ) {
      if ( a[criteria].toLowerCase() < b[criteria].toLowerCase() ){
        return -1;
      }
      if ( a[criteria].toLowerCase() > b[criteria].toLowerCase() ){
        return 1;
      }
      return 0;
    }
    console.log("Hello")

    setTransaction([...transactions.sort( findDiff )]);
  }
  return (
    <div>
      <Search newTransaction={newTransaction} setTransaction={setTransaction}/>
      <AddTransactionForm setTransaction={setTransaction}/>
      <TransactionsList transactions={transactions} handleSort={handleSort} setTransaction={setTransaction}
    ></TransactionsList>
    </div>
  );
}

export default AccountContainer;
