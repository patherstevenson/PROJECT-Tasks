import React from 'react';
import PropTypes from 'prop-types';
import Task from './task.jsx';

import '../assets/style/tasklist.css';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filter : ''};
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(event) {
    this.setState({filter : event.target.value});
  }

  tasksBuilder(filter=this.state.filter) {
    const tasksList = this.props.todo.filter(task => 
        task.description.includes(filter))
          .map( task =>
                <Task description={task.description} duration={task.duration} 
                priority={task.priority} id={task.id}
                key={task.id} taskDone={this.props.taskDone}
                taskPriorityChange={this.props.taskPriorityChange}
                removeTask={this.props.removeTask}/>
      );
    return tasksList;
  }

  sumDuration(tasks) {
    return tasks.map(task => task.props.duration).reduce( (prev,elem) => prev + elem, 0);
  }

  render() {
    const tasksList = this.tasksBuilder();
    return (
      <div className="tasklist">
          <h3>Tâche en cours</h3>
          <input type="text" placeholder="filtre" defaultValue="" onChange={this.handleFilter}/>
          <p>Il y a {tasksList.length} {tasksList.length > 1 ? "tâches" : "tâche"} en cours.
           Pour une durée de {this.sumDuration(tasksList)} mn</p>
          {tasksList}
      </div>
    );
  }
  static propTypes = {
    todo : PropTypes.array.isRequired,
    taskPriorityChange : PropTypes.func.isRequired,
    taskDone : PropTypes.func.isRequired,
    removeTask : PropTypes.func.isRequired
  }
}
