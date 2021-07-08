import './App.css';

function Card({title,cal}) {
  return (
      <div className='card'>
        <h1>{title}</h1>
        <p>You have consumed {cal} cals today </p>
      </div>
  );
}

export default Card;
