import React from "react";
import Button from "./Button";

export default function BillSplit() {
  return (
    <form className="form-split-bill">
      <h3>Split The Bill</h3>
      <label>💰 Bill Value</label>
      <input type="text" />

      <label>💸 Your Expense</label>
      <input type="text" />

      <label>🧑 X's Expense </label>
      <input type="text" disabled />

      <label>🤑 who is Paying Bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend"> X </option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
