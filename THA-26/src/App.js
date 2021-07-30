import './App.css';
import {useState} from "react"
import {username , password , email} from "./actions"
import { useSelector , useDispatch } from "react-redux"

function App() {
  const username1 = useSelector(state => state.user);
  const password1 = useSelector(state => state.pass);
  const email1 = useSelector(state => state.email);
  const [log , setLog] = useState(false);
  const dispatch = useDispatch(); 

  const onHandlechange = () => {
    return(
          setLog(false) ,
          dispatch(username("")),
          dispatch(password("")),
          dispatch(email(""))
      );
  }
  return (
    <div className="App">
    <div className="Card">
      <div className="ele">
        <label> Username </label>
        <input type="text" value={username1} onChange={(e) => dispatch(username(e.target.value)) } / >  
        <br/>
      </div>
      <div className="ele">
        <label> Password </label>
        <input type="password" value={password1} onChange={(e) => dispatch(password(e.target.value)) } / >
        <br/>
      </div>
      <div className="ele">
        <label> Email </label>
        <input type="email" value={email1} onChange={(e) => dispatch(email(e.target.value)) } / >
        <br/>
      </div>
      <button onClick={()=> setLog(true)} > Click Here</button>
    </div>
    <div className="form">
    {
      ((log===true) && (username1!=="") && (password1!== "") && (email1 !=="") ) ? 
      <div>
        <h3>Check the details for verification :</h3>
        <h3>Username : {username1}</h3>
        <h3>Password: {password1}</h3>
        <h3>Email: {email1}</h3>
        <button onClick={onHandlechange}> Verify </button>
      </div> : ""
    }
    </div>
    </div>
  );
}

export default App; 
