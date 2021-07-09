import './App.css';
import Card from './Card';

const arr = [
      {
            title:'Pizza',
            cal:'56'
      },
      {
            title:'Burger',
            cal:'69'
      },
      {
            title:'Coke',
            cal:'500'
      },
      {
            title:'Browne',
            cal:'180'
      },
      {
            title:'Fried Rice',
            cal:'90'
      },
      {
            title:'Lassania',
            cal:'200'
      },
      {
            title:'Pani Puri',
            cal:'10'
      }

];

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
                  <div>
                  {arr.map((item) => 
                        <Card key={item.title} title={item.title} cal={item.cal} />
                  )}
                  </div>
      	</div>
      </div>
  );
}

export default App;
