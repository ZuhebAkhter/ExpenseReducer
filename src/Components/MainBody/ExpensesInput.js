import React, { useContext, useEffect, useRef, useState } from "react";
import ExpensesList from "./ExpensesList";
import AuthContext from "../Store/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import {
  addExpense,
  removeExpense,
  setExpense,
  editExpensez,
} from "../Store/ExpenseSlice";
import { Link } from "react-router-dom";
import ExpensesChart from "./ExpensesChart";
import Card from '../UI/Card'

const ExpensesInput = (props) => {
  const authCtx = useContext(AuthContext);
  const amountInputRef = useRef();
  const descriptionInputRef = useRef();
  const categoryInputRef = useRef();
  const dateInputref=useRef();
  const [expenses, setExpenses] = useState([]);
  const [TotalAmount, setTotalAmount] = useState(0);
  const [editingExpense, setEditingExpense] = useState(null);
  const expcart = useSelector((state) => state.expense.expenses);
  const darkmode = useSelector((state) => state.auth.isPremium);
  const Totalredu = useSelector((state) => state.expense.total);

  console.log(darkmode);
  const dispatch = useDispatch();
  let Total = 0;
  props.ApiExpenses.map((ele) => (Total = Total + ele.amount));
  authCtx.totalAmount = Total;

  //form submit Handler
  const onAddExpensesHandler = async (e) => {
    e.preventDefault();
    const enteredAmount = parseFloat(amountInputRef.current.value);
    const enteredDescription = descriptionInputRef.current.value;
    const enteredCategory = categoryInputRef.current.value;
    const enteredDate= dateInputref.current.value;

    setTotalAmount(TotalAmount + enteredAmount);
    //   authCtx.totalAmount=TotalAmount;
    const ExpenseDeatisl = {
      myid: Math.random().toString(),
      amount: enteredAmount,
      description: enteredDescription,
      category: enteredCategory,
      date: new Date(enteredDate)
    };
    dispatch(
      addExpense({
        myid: ExpenseDeatisl.myid,
        amount: ExpenseDeatisl.amount,
        description: ExpenseDeatisl.description,
        category: ExpenseDeatisl.category,
        date:ExpenseDeatisl.date
      })
    );
   
  };

  const editExpense = (expense) => {
    console.log(expense);

    setEditingExpense({
      ...expense,
      amount: amountInputRef.current.value,
      description: descriptionInputRef.current.value,
      category: categoryInputRef.current.value,
    });
    console.log(editingExpense);
  };

  const handleUpdateExpense = () => {
    dispatch(editExpensez(editingExpense));
    setEditingExpense(null);
    // Reset form fields...
    // ...
  };
  const link = document.getElementById("link");

  return (
    <>
    
      <div className={darkmode ? "bg-dark" : ""}>
        
        <div className="d-flex justify-content-around flex-column flex-md-row flex-sm-row">
          <form
            onSubmit={onAddExpensesHandler}
            className="border border-warning border rounded bg-light p-5 mt-5"
          >
            <div className="mb-3">
              <label className="form-label">Enter Amount:</label>
              <input
                type="number"
                className="form-control"
                ref={amountInputRef}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description:</label>
              <input
                type="text"
                className="form-control"
                ref={descriptionInputRef}
              />
            </div>
            {/* <div className="mb-3">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div> */}
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Date
              </span>
              <input
               type="date"
               min="2023-01-01"
               max="2023-12-31"
               ref={dateInputref}
              />
            </div>
            <div className="mb-3 form-check">
              <label className="form-check-label">Category:</label>
              <select className="form-select" ref={categoryInputRef}>
                <option>Travelling</option>
                <option>Entertainment</option>
                <option>Rents</option>
                <option>Home Expenses</option>
                <option>Education</option>
              </select>
            </div>
            {/* {editingExpense ? (
          <button className="btn btn-success" onClick={updateExpense} >Update Expense</button>
        ) : (
          <button className="btn btn-primary" onClick={onAddExpensesHandler}>Add Expense</button>
        )} */}
            <button type="submit" className="btn btn-primary me-2">
              Add Expense
            </button>
            {editingExpense && (
              <button className="btn btn-success" onClick={handleUpdateExpense}>
                Update Expense
              </button>
            )}
          </form>
          <div className="w-25 border border-dark  border rounded-circle circle bg-light pt-5 mt-5">
            <h2 className="text-center text-warning mt-5">Total Expenses</h2>
            <section className="text-center  text-danger fs-1 pt-5">
              {/* {Totalredu} */}
              <span className="badge bg-secondary fs-1">{Totalredu}$</span>
            </section>
          </div>
        </div>
        {expcart?.map((exp) => (
          <ExpensesList
            key={exp.myid}
            myid={exp.myid}
            amount={exp.amount}
            description={exp.description}
            category={exp.category}
            editExpense={editExpense}
          />
        ))}
        <h2 className="text-warning m-1">Expenses Map:</h2>
        <ExpensesChart/>
      </div>
    </>
  );
};

export default ExpensesInput;
