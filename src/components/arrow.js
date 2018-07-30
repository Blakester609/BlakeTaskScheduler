import React, { Component } from 'react';

export default class Arrow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: false
    }
  }
  
  toggleArrow = function(){
    var arrowElement = document.querySelector('.arrow');
    if(this.state.status) {
      arrowElement.classList.add("arrow-open");
    } else {
      arrowElement.classList.remove("arrow-open");
    }

    this.setState({ status: !this.state.status })
    
  }.bind(this);

  render() {
    return (
      <a onClick={() => this.toggleArrow()} className={`${this.props.className} arrow`}>
      </a>
    );
  }
}