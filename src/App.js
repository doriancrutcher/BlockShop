import 'regenerator-runtime/runtime';
import React,{useState, Component} from 'react';
import { login, logout, onSubmit } from './utils';
import './global.css';
import Navbar from './Components/Navbar';
import Cart from './Containers/Cart/Cart';
import Options from './Containers/Options/Options'

import getConfig from './config';
import { render } from 'react-dom';
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

 class App extends Component {

  constructor(props){
    super(props)
    this.state={
      itemsList:[]
    }
  }



  addItem=(name,price)=>{
    this.setState({itemsList:[...this.state.itemsList,{name,price}]})
  }

  freeItem=async()=>{
    await window.contract.deliverProducts({checkout:['Hope']})
  }



render(){

  return (
    <React.Fragment>

    <Navbar/>
    <div className='container'>
      <div className="optionsAndCart">
        <div className="options"><Options addItem={this.addItem}/></div>
        <div className="cartContainer"><Cart Items={this.state.itemsList} /></div>
   
      </div>
    </div>
    </React.Fragment>
    
  )
}
}

export default App
 