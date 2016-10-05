import React, { Component, PropTypes } from 'react';

class DayBox extends Component {
  render() {
    return (
      <div className={this.props.isBlue ? 'day-box blue' : 'day-box'}>
        {this.props.day}
      </div>
    );
  }
}

DayBox.propTypes = {
  day: PropTypes.number,
  isBlue: PropTypes.bool,
};

export default DayBox;
