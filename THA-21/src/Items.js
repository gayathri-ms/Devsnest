import './App.css';
import React, {useState} from 'react'

const Item = ({value, index, values2 , setValues1}) => {
  const [isedit , setIsedit]=useState(false)

  return (
            <div className='card2' key={index}>
            {isedit ? 
              
              <form onSubmit={(e) => { e.preventDefault(); setIsedit()}} className='form' >
                
                <input type='text' placeholder={value.title} required 
                onChange={(e) => {value.title=e.target.value}} className='iname' /><br/>
                
                <input type='number' required min='1' placeholder={value.cal} 
                onChange={(e) => {value.cal=e.target.value}} className='ical' />
                
                <div className='card-inline'>
                  <div><button className='del' type='submit'>Done</button></div>
                  <div><button className='del' 
                  onClick={() => {
                    const newItem=values2.filter((val,i) => i !== index);
                    setValues1(newItem)
                  }}
                  >Delete</button></div>
                </div>

              </form>
            :
              <div>
                <div><h1 className="title">{value.title}</h1></div>
                <p className='para'>You have consumed {value.cal} cals today</p>
                <div className='card-inline'>
                  <div><button className='del' 
                  onClick={() => setIsedit(true)}>Edit</button></div>
                  <div><button className='del'  
                    onClick={() => {
                      const newItem=values2.filter((val,i) => i !== index);
                      setValues1(newItem)
                    }}
                  >Delete</button></div>
                </div>
              </div>
            }
          </div>
        );
}

export default Item;
