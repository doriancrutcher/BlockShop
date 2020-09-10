import 'regenerator-runtime/runtime';
import React,{useState, Component} from 'react';
import { login, logout, onSubmit } from './utils';
import './global.css';
import Navbar from './Components/Navbar';
import Cart from './Containers/Cart/Cart';
import Options from './Containers/Options/Options'
import Big from 'big.js'

import getConfig from './config';
import { render } from 'react-dom';
const { networkId } = getConfig(process.env.NODE_ENV || 'development')
const BOATLOAD_OF_GAS = Big(3).times(10 ** 13).toFixed()


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

test=()=>{
  // window.account.functionCall('sendCashNow',{text:'hi'},100,100)
  //console.log(window.contract.sendCashNow({text:'hi'},'wef','wefw'))
  window.contract.sendCashNow({text:'hi'},BOATLOAD_OF_GAS,1000)
}


render(){

  return (
    <React.Fragment>
      
<button onClick={this.test}>TEST</button>
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
 