import './App.css';
import Header from './components/Header';
import {Balance} from './components/Balance';
import {Income} from './components/Income';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';
import {createContext, useState} from 'react'
import ReactSwitch from 'react-switch';

export const ThemeContext =createContext(null); //Global state for theme


function App() {
  const [theme,setTheme]=useState("light")

  const toggleTheme=()=>{
    setTheme((curr)=>(curr==="light"?"dark":"light"))
  };

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <GlobalProvider>
      <Header/>
      <div className='container' id={theme}>
        <Balance/>
        <Income/>
        <TransactionList/>
        <AddTransaction/>
        <div className='switch'>
          <label>
            {theme==="light" ? "Light Mode" : "Dark Mode"}
            </label>
        <ReactSwitch onChange={toggleTheme}
        checked={theme==="dark"}/>
        </div>
      </div>
    </GlobalProvider>
    </ThemeContext.Provider>
  );
}

export default App;
