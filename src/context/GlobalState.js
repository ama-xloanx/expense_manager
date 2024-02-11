import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transactions: []
    /*  [
          { id: 1, description: 'Fall out from Phoenix Training ', amount: 50000, type: 'income', mode:'transfer',date:'1-8-2024' },
          { id: 2, description: 'TIA', amount: 65000, type: 'income', mode:'Transfer',date:'1-8-2024' },
          { id: 3, description: 'Money to Fowler', amount: 10000, type: 'expense', mode:'transfer',date:'1-8-2024' },
          { id: 4, description: 'Money for Week 6 Transport', amount: 10000, type: 'expense', mode:'cash',date:'1-8-2024' },
          { id: 5, description: 'Money for Madrasa', amount: 15000, type: 'expense', mode:'transfer',date:'1-8-2024' },
          { id: 6, description: 'LVIC Monthly Contribution', amount: 20000, type: 'expense', mode:'transfer',date:'1-8-2024' },
        ]
        */
}

//create context
export const GlobalContext = createContext(initialState)

//provider component
export const GlobalProvider = ({ children }) => {
    //state and dispatch
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    //Actions
    const deleteTransaction = (id) =>{
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    const  add_Transaction = (transaction) =>{
       dispatch({
           type:"ADD_TRANSACTION",
           payload: transaction
       });
    }


    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            add_Transaction
        }}>
            
            {children}
        </GlobalContext.Provider>
    )
}
