import React from 'react';
import PropTypes from 'prop-types';
import DoneTask from './donetask.jsx'

import '../assets/style/tasklist.css';

export default class Done extends React.Component {
  constructor(props) {
    super(props);
    this.state = { printDoneTasks: false};
    this.handleClick = this.handleClick.bind(this);
  }

  tasksBuilder() {
    const tasksList = this.props.done.map( task =>
      <DoneTask description={task.description} duration={task.duration} 
      priority={task.priority} id={task.id} key={task.id}
      removeTask={this.props.removeTask}/>
    );
    return tasksList;
  }

  handleClick() {
    this.setState( {printDoneTasks : !this.state.printDoneTasks});
  }

  render() {
      return (
        <div className="tasklist">
            <h3>
              <button id="doneButton" onClick={this.handleClick}>
              Tâches terminées{this.state.printDoneTasks ? ' -' : ' +('+this.props.done.length+')'}
              </button>
            </h3>
            {this.state.printDoneTasks ? this.tasksBuilder() : ''}
        </div>
      );
  }
  static propTypes = {
    done : PropTypes.array.isRequired,
    removeTask : PropTypes.func.isRequired
  }
}
