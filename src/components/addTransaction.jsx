import React, {useState,useContext} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {

  //local form state
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [selectedTransactType, setSelectedTransactType] = useState('');
  const [selectedTransactMode, setSelectedTransactMode] = useState('');

  const { add_Transaction} = useContext(GlobalContext)

  
  const unfilledRequiredField = () => toast.error("Please fill out all fields");
  const alertSuccessPosting = () => toast.success("Posting Successful");

  const onSubmit = e =>{
    e.preventDefault();

    //handle date
    const currentDate = new Date();
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
    const currentYear = currentDate.getFullYear();
    const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear; // "27-11-2020"

    const  newTransaction = { id: Math.floor(Math.random() *10000000000),
                              description, 
                              amount, 
                              type: selectedTransactType, 
                              mode: selectedTransactMode,
                              date: dateString 
                            };
    
    if (description && amount && selectedTransactType && selectedTransactMode){
      //effect the new transaction and
      add_Transaction(newTransaction);
      console.log(newTransaction);
      //clear the form
      setDescription("");
      setAmount("");
      setSelectedTransactType("");
      setSelectedTransactMode("");
      alertSuccessPosting()
    }else{
      //alert("Please fill out all fields")
      unfilledRequiredField()        
    }
  }
  

  return (
    <>
    <h3>Add New Transaction</h3>
    
    <form onSubmit={onSubmit} id="form">
        <div className="form-control">
          <label htmlFor="desc">Description</label>
          <input type="text" id="desc" value={description} 
                  onChange={(e)=>setDescription(e.target.value)} 
                  placeholder="Enter description for this transaction..." />
        </div>

        <div className="form-control">
          <label htmlFor="amount">Amount </label>
          <input type="number" id="amount" value={amount} 
                  onChange={(e)=>setAmount(parseInt(e.target.value))} 
                  placeholder="Enter amount..." />
        </div>

        <div className="form-control">
            <p>Please select your transaction type:</p>
            <input 
              type="radio" 
              id="income" 
              name="transactType" 
              value='income' 
              checked={selectedTransactType === 'income'}
              onChange={(e) => setSelectedTransactType(e.target.value)} />
            <label htmlFor="income">Income</label>
            <input 
              type="radio" 
              id="expense" 
              name="transactType" 
              value="expense"
              checked={selectedTransactType === 'expense'}
              onChange={(e) => setSelectedTransactType(e.target.value)}/>
            <label htmlFor="expense">Expense</label>
        </div>
        <div className="form-control">
            <p>Please select your transaction mode:</p>
            <input 
              type="radio" 
              id="cash" 
              name="transactMode" 
              value="cash"
              checked={selectedTransactType === 'cash'}
              onChange={(e) => setSelectedTransactMode(e.target.value)}/>
            <label htmlFor="cash">Cash</label>

            <input 
              type="radio" 
              id="transfer" 
              name="transactMode" 
              value="transfer"
              checked={selectedTransactMode === 'transfer'}
              onChange={(e) => setSelectedTransactMode(e.target.value)}/>
            <label htmlFor="transfer">Transfer</label>
        </div>
        <button  className="btn">Add transaction</button>
      </form>
      <ToastContainer />
    </>
    
  )
}
