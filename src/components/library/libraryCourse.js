import React, { Component } from 'react';

import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../action';

export default class LibraryCourse extends Component {
  render() {
    return (
      <div className="library-course">
        <div className="library-course__title-check">
          <label className="library-course__title">Problem Solving</label>
          {Icon("fas fa-check", "library-course__icon")}
        </div>

        <Arrow className="library-course__arrow" />
        <Action className="library-course__action"/>
        <div className="library-course__description">
          <label>Course Description</label>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet lorem sit amet ante fringilla, non sagittis orci volutpat. Quisque non orci eget massa venenatis vulputate sed et metus. Nulla ornare nunc quis ligula volutpat ultricies. Sed viverra, dui ac dignissim viverra, ex augue aliquam tortor, non tempor tortor turpis sit amet orci. Vivamus sapien erat, lacinia sed nisi ac, tincidunt porttitor velit. Aenean lorem quam, sollicitudin et sagittis quis, euismod vel felis. Nulla sit amet nunc justo.</p>
        </div>
      </div>
    );
  }
}