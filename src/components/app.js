import React, {Component} from 'react';
import Gift from './gifts';
import {max_number} from './../helper'

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            gifts:[]
        }
    }
  addGift=()=>{
   const {gifts}=this.state;
   gifts.push({id:max_number(gifts.map(gift=>gift.id))+1});
   this.setState({gifts})
  }  
  removeGift=(id)=>{
      const gifts=this.state.gifts.filter(  gift=>gift.id!==id)
      this.setState({gifts});
  }

    render(){
        
        return(
        <div>
            <h2>Gift Giver</h2>
            <div className="gift-list">
             {/*Whenever add-gift button is clickes state updates and Gift component rendered*/}
                {this.state.gifts.map(gift=>{
                    return(
                        //We are shallowy rendering app component in App.test.js file so snapshot is not changed and it doesn't render full content just its outer most JSX that is div
                        <Gift key={gift.id} gift={gift} removeGift={this.removeGift}/>
                    )
                })}
            </div>
            <button className="btn btn-primary btn-add" onClick={this.addGift}>Add Gift</button>
            
        </div>
        );
    }
}

export default App;
