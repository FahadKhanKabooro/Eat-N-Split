import React from "react";
import Button from "./Button";

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={selectedFriend?.id === friend.id}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && (
        <p>
          {friend.name} and you are even {Math.abs(friend.balance)}$
        </p>
      )}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "select"}
      </Button>
    </li>
  );
}

export default Friend;
