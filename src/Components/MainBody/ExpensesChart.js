import React from 'react'
import { useSelector } from 'react-redux';
import Chart from '../Chart/Chart';
 
const ExpensesChart = () => {
  const expp = useSelector((state) => state.expense.expenses);
  console.log(expp);
    const chartDataPoints=[
        {label:'Jan', value:0},
        {label:'Feb', value:0},
        {label:'Mar', value:0},
        {label:'Apr', value:0},
        {label:'May', value:0},
        {label:'Jun', value:0},
        {label:'Jul', value:0},
        {label:'Aug', value:0},
        {label:'Sep', value:0},
        {label:'Oct', value:0},
        {label:'Nov', value:0},
        {label:'Dec', value:0},

    ]
    for(const expense of expp){
        const expenseMonth=expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }
  return (
    <Chart dataPoints={chartDataPoints}/>
  )
}

export default ExpensesChart