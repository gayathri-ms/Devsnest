import './App.css';
import Card from './Card'

const items = [
  {
    title:'Pizza',
    cal:56
  },
  {
    title:'Burger',
    cal:69
  },
  {
    title:'Coke',
    cal:500
  },
  {
    title:'Browne',
    cal:180
  },
  {
    title:'Fried Rice',
    cal:200
  },
  {
    title:'Lassania',
    cal:600
  },
  {
    title:'Pani Puri',
    cal:10
  }
]

function App() {
  return (
    <div className="App">
      <h2>Instructions</h2>
      <ul>
        <li>
          Pass value and setter of the state to the component as props
        </li>
      </ul>
      <h1>Calorie Read Only</h1>
      <div className='Card'>
        <Card item={items} />
      </div>
    </div>
  );
}

export default App;
