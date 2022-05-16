import React from 'react';
import PropTypes from 'prop-types';
import PriorityLevel from './priorityLevel.jsx';

import '../assets/style/priorityScale.css';

export default class PriorityScale extends React.Component {
  constructor(props) {
    super(props);
  }

  priorityLevelInit() {
    const priorityLevels = [];
    var i = 1;
    for(let j=1;j<7;j++) {
      priorityLevels.push(
      <PriorityLevel priority={this.props.priority} active={i <= this.props.priority ? true : false}  
      key={j} value={j} task={this.props.task} taskPriorityChange={this.props.taskPriorityChange}/>);
      i++;
    }
    return priorityLevels;
  }

  render() {
    return (
      <div className="scale">
        {this.priorityLevelInit()}
        <div>
          ({this.props.priority})
        </div>
      </div>
    );
  }
  static propTypes = {
    priority : PropTypes.number.isRequired,
    task : PropTypes.object.isRequired,
    taskPriorityChange : PropTypes.func.isRequired
  }
}