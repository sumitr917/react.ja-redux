import React, { Component } from 'react'
import { ADD,SUB } from './simpletoolkitconfig';
import { connect } from 'react-redux';
class ClassComp extends Component {

  constructor(){

    super()
  }
  render() {
    return (
      <div>

        <h1>Cake Count : {this.props.cakeCount}</h1>

        <button onClick={()=>this.props.add()}>Increment</button>
        <button>Decrement</button>

      </div>
    )
  }
}

function mapStateToProps(state) {
  const cakeCount = state.cakeCount;
  return {
    cakeCount  //cakeCount will be avaialble inside props of this class comp

 };
}


function  mapDispatchToProps(dispatch){
  return {
    add: () => dispatch(ADD(1)), // add,sub will be  avaialble inside props of this class comp
    sub: () => dispatch(SUB()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ClassComp); //it will connect ClassComp to redux store
