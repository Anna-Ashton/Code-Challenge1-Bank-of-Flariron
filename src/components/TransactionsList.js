import React from "react";
import Transaction from "./Transaction";

function TransactionsList({transactions, handleClick, setTransaction}) {
console.log(transactions)
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header"onClick={handleClick}>Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header"onClick={handleClick}>Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {transactions.map(transaction=>
        <Transaction key={transaction.id} id={transaction.id} date={transaction.date} 
        description={transaction.description}
        category={transaction.category} 
        amount={transaction.amount} setTransaction={setTransaction}>
        </Transaction>)}
      </tbody>
    </table>
  );
}

export default TransactionsList;
