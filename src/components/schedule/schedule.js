import React, { Component } from 'react';
import Gradient from '../gradient';

export default class Schedule extends Component {
  render() {
    return (
      <div>
         <h1 className="schedule__title">My Schedule</h1>
         <Gradient/>
      </div>
    );
  }
}