import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './transaction'


export const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext)

  const [open, setOpen] = useState(false);

  return (
    <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="collapse-content"
          aria-expanded={open} >
           Click Here to Show/Hide Transactions
      </Button>

      
      <Collapse in={open}>
        <div id="collapse-content">
        <ul id="list" className="list">
        {transactions.map(transaction=>( 
                    <Transaction  key={transaction.id} 
                                  transaction={transaction} 
                    />))}
        </ul>
        </div>
      </Collapse>
    </>

  )
}
