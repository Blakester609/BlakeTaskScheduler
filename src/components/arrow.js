import React, { Component } from 'react';

export default class Arrow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: false
    }
  }
  
  toggleArrow = function(){
    this.props.callback(this.state.status)
    this.arrowElement = document.getElementById(this.id);
    if(this.state.status) {
      this.arrowElement.classList.add("arrow-open");
    } else {
      this.arrowElement.classList.remove("arrow-open");
    }

    this.setState({ status: !this.state.status })
    
  }.bind(this);

  render() {
    this.id=`arrow-${this.props.id}`
    return (
      <a id={this.id} onClick={() => this.toggleArrow()} className={`${this.props.className} arrow`}>
      </a>
    );
  }
}