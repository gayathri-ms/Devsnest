import './App.css';
import Addtodo from "./components/addtodo"
import List from "./components/list"

function App() {
  return (
    <div className="App">
      <h1>TODO LIST </h1>
      <Addtodo />
      <List />
    </div>
  );
}

export default App;
