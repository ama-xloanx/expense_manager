import React, {useContext} from 'react'
import { FaNairaSign } from "react-icons/fa6";
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const { transactions} = useContext(GlobalContext)

  const incomeArray = transactions.map(transaction => transaction.type === 'income' ? transaction.amount : 0)
  const totalIncome = incomeArray.reduce((acc, income) => {return  acc + income}, 0).toFixed(2)

  const expenseArray = transactions.map(transaction => transaction.type === 'expense' ? transaction.amount : 0)
  const totalExpense = expenseArray.reduce((acc, expense) => {return  acc + expense}, 0).toFixed(2)

  const difference = totalIncome - totalExpense

  const balance = difference >=  0 ?  `${difference}` : ` ${Math.abs(difference)} (Deficit)`  

  
  return (
  <>
  <div className="firstComponent">

   <h4>Current Balance</h4>
      <h1 id="balance">
        <FaNairaSign size='1.5rem'/>
        {Intl.NumberFormat('en-US').format(balance)}</h1>
  </div>
  </>
   
  )
}
