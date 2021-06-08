import React, {Component} from 'react'
import Form from './Components/form.js'
import Add from './Components/Add.js'
import Display from './Components/Display.js'
import Subtract from './Components/Subtract.js'
import Multiply from './Components/Multiply.js'
import Divide from './Components/Divide.js'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      input1:'',
      input2:'',
      total: '',
      visib: false
    }
  }
  onInputchange1=(event) =>{
    this.setState({
      input1: event.target.value
    })
    console.log(this.state.input1)
  }
  onchange2= (event) =>{
    this.setState({
      input2: event.target.value
    })
    console.log(this.state.input2)
  }

  onSubmit = (prop) => {
    console.log('click');
    this.setState({visib: true})
    if(prop==='Add'){
      this.setState({
        total: Number(this.state.input1) + Number(this.state.input2)
    });
    }else if(prop==='Subtract'){
      this.setState({
        total: Number(this.state.input1) - Number(this.state.input2)
    });
    }else if(prop==='Multiply'){
      this.setState({
        total: Number(this.state.input1) * Number(this.state.input2)
    });
    }else if(prop==='Divide'){
      if(Number(this.state.input2)){
         this.setState({
        total: Number(this.state.input1) / Number(this.state.input2)
      });
      }
      else{
        this.setState({total:'Cannot divide by zero'})
      }
    }
  }
  render(){
    return (
    <div>
      <h2 className='center'>Simple Calculator</h2>
      <Form onInputchange1={this.onInputchange1}
        onchange2={this.onchange2}
      />
      
      {
        this.state.visib === true 
        ?<div className='blocks center'>
          <Display total={this.state.total} />
        </div>
        : <div></div>
      }
      
      <div className='blocks center'>
        <Add onSubmit={this.onSubmit}/>&nbsp;&nbsp;
        <Subtract onSubmit={this.onSubmit} />&nbsp;&nbsp;
        <Multiply onSubmit={this.onSubmit} />&nbsp;&nbsp;
        <Divide onSubmit={this.onSubmit} />&nbsp;&nbsp;
      </div>
     
    </div>
  );
  }
  
}

export default App;
