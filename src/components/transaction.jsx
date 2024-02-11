import React, {useContext} from 'react'
import { FaCircleXmark } from "react-icons/fa6";
import { GlobalContext } from '../context/GlobalState'


const Transaction = ({transaction, onDelete} ) => {
    const { deleteTransaction } = useContext(GlobalContext)

    return ( 
        <>
        <li className={transaction.type === 'income' ? 'plus' : 'minus'} >
            {transaction.description}
            <span>{transaction.amount}</span>
            <button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">
                <FaCircleXmark size='1rem'/>    
            </button>
            </li>
        </>
     );
}
 
export default Transaction;