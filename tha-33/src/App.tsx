import React, { useContext , useState } from 'react';
import './App.css';
import Todolist from "./components/todolist"
import Theme , {Themetype} from "./components/theme"
import Toggle from "./components/toggle"

const  App = () => {
	const [ theme , setTheme ] = useState<boolean>(false)

  return (
  	<Theme.Provider value={{theme , setTheme}} >
    	<div className={ theme ? "App appdark" : "App" }>
    		<Toggle />
    		<Todolist />
      	</div>
    </Theme.Provider>
   
  );
}

export default App;
