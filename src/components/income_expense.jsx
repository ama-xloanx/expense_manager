import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Income_expense = () => {
  let { transactions, deleteTransaction } = useContext(GlobalContext)

  const incomeArray = transactions.map(transaction => transaction.type === 'income' ? transaction.amount : 0)
  let totalIncome = incomeArray.reduce((acc, income) => {return  acc + income}, 0).toFixed(2)
  //totalIncome = Math.round(+totalIncome * 1e12) / 1e12
  const expenseArray = transactions.map(transaction => transaction.type === 'expense' ? transaction.amount : 0)
  const totalExpense = expenseArray.reduce((acc, expense) => {return  acc + expense}, 0).toFixed(2)
  
  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">{Intl.NumberFormat('en-US').format(totalIncome)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">{Intl.NumberFormat('en-US').format(totalExpense)}</p>
        </div>
      </div>
  )
}
