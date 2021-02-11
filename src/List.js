import React, { Component } from 'react';

class List extends Component {

    state = {
        list : [
          {name:"Shirt", price:"1500"}
        ]
      }

      
  Addlist(event) {
    console.log(event);
    this.setState ({
      list : [
        {name:event.target.value, price:"2000"}
      ]
    })
  }
    render (){
        return (
            <div>
                <List 
         Item = {this.state.list[0].name} Price={this.state.list[0].price} 
         click ={this.Addlist.bind(this)}
         changed = {this.Addlist.bind(this)}
        stateObj={this.state}
         />
               <button onClick={this.props.click}>Add Item</button>
               Item = {this.props.Item}, Price={this.props.Price}
               <input type="text" onChange={this.props.changed} value={this.props.stateObj.list[0].name}/>
            </div>
        )
    }
}
export default List;