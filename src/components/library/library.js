import React, { Component } from 'react';
import LibraryCourse from './libraryCourse';
import { connect } from 'react-redux';
import * as actions from '../../actions'

class Library extends Component {

  componentWillMount() {
    this.props.fetchCourses()
  }

  renderCourses() {
    const data = this.props.courses

    return data.map((course, index) => {
      return <LibraryCourse {...course} key={index} />
    })
  }

  render() {
    console.log(this.props.courses);
    return (
      <div className="library">
        <div className="library__container">
          <h1 className="library__container__title">Course Library</h1>
          {this.renderCourses()}
          <div className="library__container__space-bottom"></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses
  }
}

export default connect(mapStateToProps, actions)(Library);