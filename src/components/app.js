import React, {Component} from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            gifts:[]
        }
    }
  addGift=()=>{
   const {gifts}=this.state;
   const ids=gifts.map(gift=>gift.id);
   const max_id=ids.length>0?Math.max(...ids):0
   gifts.push({id:max_id+1});
   this.setState({gifts})
  }  

    render(){
        
        return(
        <div>
            <h2>Gift Giver</h2>
            <div className="gift-list">
                {this.state.gifts.map(gift=>{
                    return(
                        <div key={gift.id}></div>
                    )
                })}
            </div>
            <button className="btn btn-primary btn-add" onClick={this.addGift}>Add Gift</button>
            
        </div>
        );
    }
}

export default App;
