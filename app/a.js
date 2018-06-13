import React from 'react'

export default class A extends React.Component{
  componentWillMount(){
    console.log(this)
  }
  render(){
    return(
      <div>这是默认a页面</div>
    )
  }
}
