import './App.css';
import Form from "./components/form"
import Weather from "./components/weather"
import Theme from "./components/theme"
import { useDispatch , useSelector } from "react-redux"

function App() {
  const theme = useSelector(state => state.toggle);

  return (
    <div className={theme ? "App dark" : "App"}>
      <Theme />
      <Form />
      <Weather />
    </div>
  );
}

export default App;
