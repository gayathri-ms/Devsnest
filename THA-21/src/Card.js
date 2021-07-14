import './App.css';


const Card = ({onHandleChange , onHandleChange1, values }) => {
  return (
    
     <form onSubmit={onHandleChange1}>
        <input className='item' type="text" required placeholder='item name'
          onChange={onHandleChange('title')} value={values.title} />&nbsp;

        <input className='calorie' type="number" required min='1' placeholder='Calorie Amount' 
        onChange={onHandleChange('cal')} value={values.cal} /><br/>
        <div className='bcenter'>
          <button type='submit' className='button' > Add Item </button>
        </div>
     </form>
    
  );
}

export default Card;
