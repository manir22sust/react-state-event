import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const [amount, setAmount] = useState(props.amount);
  // const [date, setDate] = useState(props.date);

  console.log("Expenseitem evaluated by react");
  const clickHandler = (event) => {
    // setTitle("updated!!");
    // console.log("Clicked!!!");
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate datemm={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">$ {props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
