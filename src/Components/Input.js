import React from "react";
export default function Input(props) {
  return (
    <>
    <div className="head">
      <h1>WishList</h1>
      <form className="input-container">
        <input
        onChange={props.handleChange} 
        className="input" 
        placeholder="Enter Item"
        />
        <button onClick={props.addToItem}>ADD</button>
      </form>

      </div>
    </>
  );
}
