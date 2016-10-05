import React, { Component, PropTypes } from 'react';
import DayBox from './DayBox';
import DayNameHeader from './DayNameHeader';
import _ from 'lodash';

class Calendar extends Component {
  render() {
    const props = this.props;
    const weeks = [];
    for (let i = props.start; i <= props.end; i++) {
      const weekIndex = Math.floor((i - props.start) / 7);
      if (weeks.length === weekIndex) {
        weeks.push([]);
      }
      weeks[weekIndex].push(i);
    }
    const dayBoxes = _.map(weeks, function(week) {
      return (
        <div className="week" key={week[0]}>
          {_.map(week, function(day) {
            return <DayBox key={day} day={day} isBlue={false} />;
          })}
        </div>
      );
    });
    return (
      <div className="calendar-container">
        <DayNameHeader />
        {dayBoxes}
      </div>
    );
  }
}

Calendar.propTypes = {
  start: PropTypes.number,
  end: PropTypes.number,
}

export default Calendar;
