import React,{createContext,useReducer} from "react";
import AppReducer from './AppReducer.js';

let initialArr = JSON.parse(localStorage.getItem("value"))||[];

const initialState={
    transactions: initialArr
}
export const GlobalContext=createContext(initialState); //creating a global State with the value of initial state

export const GlobalProvider =({children})=>{

    const [state,dispatch]=useReducer(AppReducer,initialState/*Initial Object*/);
    
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    const arr=[]
    const value= state.transactions;
    const filterValue=value.filter(e=>e.id !== id);
    for(let i=0;i<filterValue.length;i++){
        arr.push(filterValue[i]);
    }
    localStorage.setItem("value",JSON.stringify(arr));
    }
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }
    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
        }}>
        {children}
    </GlobalContext.Provider>);
}