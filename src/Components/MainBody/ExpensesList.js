import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeExpense } from "../Store/ExpenseSlice";

const ExpensesList = (props) => {
  const dispatch = useDispatch();
  const expp = useSelector((state) => state.expense);
  console.log(expp);

  const deleteExpenseHandler = () => {
    dispatch(
      removeExpense({
        myid: props.myid,
        amount: props.amount,
      })
    );
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="card text-bg-info w-50 m-3">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <section className="fs-1">
              {props.amount}
              <span className="fs-5">$</span>
            </section>
            <span className="float-end fw-bold fs-4">{props.category}</span>
          </div>
          <span className="d-block fw-italic">{props.description}</span>
          <span>
            <button
              onClick={deleteExpenseHandler}
              className="float-end btn btn-danger"
            >
              Delete
            </button>
            {/* <button
              onClick={() =>
                props.editExpense({
                  myid: props.myid,
                  amount: props.amount,
                  description: props.description,
                  category:props.category
                })
              }
              className="btn btn-warning"
            >
              Edit
            </button> */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExpensesList;
