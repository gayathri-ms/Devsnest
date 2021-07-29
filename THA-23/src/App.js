import './App.css';
import { useState , useEffect , useRef , useCallback } from "react"

const usePrevious = (count) => {
  const ref=useRef();
  useEffect(() => {
    ref.current=count
  }, [count])

  return ref.current;
}
const useToggle = () => {
  const [state, setState] = useState(false);
  const toggle1 = useCallback( () => setState( state => !state) , [])

  return [state , toggle1] ;
}

function App() {

  const [ count, setCount] = useState(0);
  const previous = usePrevious(count);
  const [toggle , setToggle] = useToggle()

  return (
    <div className="App">
      <h1>Now :{count} </h1>
      <h1>Before :{previous} </h1>
      <button onClick={ () => setCount(count+1) } > Increment </button> <br/><br/>
      <button onClick={setToggle} > {toggle ? "Toggled" : "Click to Toggle"} </button><br/><br/>
      {
        !toggle ? <div>Hello!! Happy Morning :) </div> : <div> Pleasant to have you here</div>
      }
    </div>
  );
}

export default App;
