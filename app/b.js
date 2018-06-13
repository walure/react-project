import React from 'react'
import {Prompt} from 'react-router-dom'

export default class B extends React.Component{
  constructor(props){
    super(props)
    this.state={
      power:false,
      aa:1
    }
    this.setPower = this.setPower.bind(this)
  }
  setPower(){

    this.setState({
      power:true
    })
    console.log( this.state)
  }
  render(){
    return(
      <div>
        <Prompt message="确定离开？" when={this.state.power} />
        <p>这是b页面</p>
        <button onClick={this.setPower}>开启</button>
      </div>
    )
  }
}