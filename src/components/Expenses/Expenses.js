import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { ExpensesList } from "./ExpensesList";
import { ExpensesChart } from "./ExpensesChart";
import "./Expenses.css";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // console.log("Expense.js");
    // console.log(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      {/* <Card className="expenses">
        <ExpensesFilter />
      </Card> */}

      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        {/* {expensesContent} */}
        {/* {filteredExpenses.length === 0 ? (
          <p> no expenses found. </p>
        ) : (
          filteredExpenses.map((it) => (
            <ExpenseItem
              key={it.id}
              title={it.title}
              amount={it.amount}
              date={it.date}
            />
          ))
        )} */}
      </Card>
    </>
  );
};

export default Expenses;
