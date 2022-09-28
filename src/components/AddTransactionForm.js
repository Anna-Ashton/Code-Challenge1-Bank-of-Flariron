import React, { useState } from "react";

function AddTransactionForm({ setTransaction }) {
  const [dataObj, setDataObj] = useState({});
  function handleBlur(e) {
    setDataObj({ ...dataObj, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
   
   setTransaction((prev) => [...prev, dataObj]);
   fetch(" http://localhost:8001/transactions",{
    method:"POST",
    headers:{"Content-Type": "application/json",},
    body:JSON.stringify({...dataObj,"number":parseInt(dataObj.number)})
   })
   console.log(dataObj);
  }
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input type="date" name="date" onBlur={handleBlur} />
          <input
            type="text"
            name="description"
            placeholder="Description"
            onBlur={handleBlur}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            onBlur={handleBlur}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            onBlur={handleBlur}
          />
        </div>
        <button className="ui button" type="submit" onClick={handleSubmit}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
