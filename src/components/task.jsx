import React from 'react';
import PropTypes from 'prop-types';
import PriorityScale from './priorityScale.jsx';
import DoneButton from './doneButton.jsx';
import RemoveButton from './removeButton.jsx';

import '../assets/style/task.css';

export default class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="task">
        <div className="info">
          {this.props.description} {'('+this.props.duration+'mn)'}
        </div>
        <PriorityScale priority={this.props.priority} task={this} taskPriorityChange={this.props.taskPriorityChange}/>
        <DoneButton taskDone={this.props.taskDone} task={this}/>
        <RemoveButton task={this} removeTask={this.props.removeTask} from='todo'/>
      </div>
    );
  }
  static propTypes = {
    description : PropTypes.string.isRequired,
    priority : PropTypes.number.isRequired,
    duration : PropTypes.number,
    taskDone : PropTypes.func.isRequired,
    taskPriorityChange : PropTypes.func.isRequired
  }

  static defaultProps = {
    duration : 0,
    priority : 1
  }
}

