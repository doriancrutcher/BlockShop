import React, { Component } from 'react';
import cartImg from './../../assets/cartImg.svg';
import './Cart.css'
import CheckoutItem from './Checkout/CheckoutItem'
import { WalletAccount, utils} from 'near-api-js';


class Cart extends Component {

    constructor(props){
        super(props)
        this.state={
            cartList:this.props.Items,
            total:0

        }
    }


    UpdateStuff=()=>{

        let totalPrice=0;
        this.props.Items.forEach((x)=>{
            totalPrice=totalPrice+x.price
        })
        this.setState({
            cartList:this.props.Items,
            total:totalPrice
        })

    }

    componentDidUpdate(prevProps){
        if(prevProps.Items!==this.props.Items){
            this.UpdateStuff()
            
        }
    
    }

    startTransaction=async()=>{
        let CheckoutList = this.state.cartList.map(x=>x.name)
        window.account.sendMoney('blockshop.testnet',3000000000)
        .then(()=>[
            window.contract.deliverProducts({checkout:CheckoutList})
        ])
    }
    
    

    render() {
        return (

         
            <div className="cartContainer">
            {console.log(this.state.cartList)}
            <div className='cartIMG'><img src={cartImg}></img></div>
            <div className='checkoutList'>
            {(this.state.cartList[0]?this.state.cartList.map((x)=>{
            return <CheckoutItem name={x.name} price={x.price}/>
            }):'Select Item(s)')}</div>

            <div className='total'> {this.state.total} Near Tokens </div>
            <div><button onClick={this.startTransaction} className='submit'>Submit</button></div>
            </div>
        );
    }
}

export default Cart;