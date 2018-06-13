import React from 'react'

export default class C extends React.Component{
  componentWillMount(){
    console.log(this)
  }
  render(){
    return(
      <div>这是c页面,{this.props.match.params.a},{this.props.match.params.b}</div>
    )
  }
}