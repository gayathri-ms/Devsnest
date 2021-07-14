import './App.css';
import React , {useState} from 'react'
import Card from './Card'
import Item from './Items'


function App() {

  const [values , setValues] = useState({
    title:"",
    cal: 0
  })
  const {title,cal}=values
  const [values1 , setValues1] = useState([])

  const onHandleChange = (name) =>(e) =>{
    setValues({...values,
      [name]:e.target.value
    })
  }
  const onHandleChange1 =(e) =>{
    e.preventDefault();
    setValues1([...values1,values])
    setValues({
      ...values,
      title:"",
      cal:0
  })
}

  return (
    <div className="App">
      <Card onHandleChange={onHandleChange} onHandleChange1={onHandleChange1} values={values} />
      {
         values1.length === 0 ? 
          (<h2 className='icenter' >Start Adding Items</h2>)
          : values1.map((value,index) => {
            return(
              <Item className='icenter' key={index} values2={values1} setValues1={setValues1} value={value} index={index} />
            )
        })
      }
      
    </div>
  );
}

export default App;
