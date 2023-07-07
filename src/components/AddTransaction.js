import React, { useContext, useState} from 'react';
import { GlobalContext } from '../Context/GlobalState';

function AddTransaction() {

    const [text,setText]=useState('');
    const [amount,setAmount]=useState([]);
    const [store, setStore] = useState([]);


    const {addTransaction}=useContext(GlobalContext);
    

    const onSubmit=e=>{
      e.preventDefault();
      const newTransaction={
        id:Date.now(),
        text,
        amount:+amount
      }
      addTransaction(newTransaction);
      store.push(newTransaction);
      localStorage.setItem("value", JSON.stringify(store));
      setText('')
      setAmount([])
  }
  
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} className='inputField' 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Enter text..."/>
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} className='inputField'
          onChange={(e) => setAmount(e.target.value)} 
          placeholder="Enter amount..."/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction