import './App.css';
import Card from './Card';

function App() {
  return (
      <div>
      	<h2 className='hcenter'>Instructions</h2>
      	<ul>
      		<li style={{padding:"5px"}}>Build a container</li>
      		<li style={{padding:"5px"}}>Create a seperate function and use it as a component</li>
      		<li style={{padding:"5px"}}>Pass props "calory and food" and call it to main component</li>
      	</ul>
      	<h1 className='hcenter'>Calorie Read Only</h1>
      	<div className="card2">
      		<Card title='Pizza' cal='56' />
      		<Card title='Burger' cal='69' />
      		<Card title='Coke' cal='500' />
      		<Card title='Browne' cal='180' />
      		<Card title='Fried Rice' cal='90' />
      		<Card title='Lassania' cal='200' />
      		<Card title='Pani Puri' cal='10' />
      	</div>
      </div>
  );
}

export default App;
