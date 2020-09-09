import React, { Component } from 'react';
import Item from './Item/Item'
import waterShield from './../../assets/waterShield.png'
import wingOfTheFallen from './../../assets/wingOfTheFallen.png'
import echoPearl from './../../assets/echoPearl.png'
import './Options.css'

class Options extends Component {
    constructor(props){
        super(props)
        this.state={
            optionsArray:[<Item addItem={this.props.addItem} key={1} name="echoPearl" itemImg={echoPearl} price={30}/>,<Item addItem={this.props.addItem} key={2} name="waterShield"  itemImg={waterShield} price={60}/>,<Item addItem={this.props.addItem} key={3} name="wingOfTheFallen" itemImg={wingOfTheFallen} price={80}/>]

        }

    }

    render() {
        return (
            
            <div>
                {console.log(this.props)}
                <div className="optionHouse">
                    {this.state.optionsArray.map(x=>x)}


                </div>
            </div>
        );
    }
}

export default Options;