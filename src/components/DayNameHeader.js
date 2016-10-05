import React, { Component } from 'react';
import _ from 'lodash';

class DayNameHeader extends Component {
  render() {
    const dayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'];
    return (
      <div className="day-name-header">
        {_.map(dayNames, function(dayName) {
          return (
            <div className="day-name-box">
              {dayName}
            </div>
          );
        })}
      </div>
    );
  }
}

export default DayNameHeader;
