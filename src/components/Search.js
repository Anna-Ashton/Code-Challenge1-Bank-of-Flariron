import React, { useState } from "react";

function Search({ newTransaction, setTransaction }) {
  function changeHandler(event) {
    setTransaction([
      ...newTransaction.filter((tc) => {
        return tc.description.includes(event.target.value);
      }),
    ]);
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={changeHandler}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}
export default Search;
