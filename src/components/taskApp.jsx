import React from 'react';
import tasksData from '../data/tasksData.js';
import AddTask from './addTask.jsx';
import Todo from './todo.jsx';
import Done from './done.jsx';

import '../assets/style/taskApp.css';
/*
 define root component
*/
export default class TaskApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { done : [], todo : [] };
    this.taskPriorityChange = this.taskPriorityChange.bind(this);
    this.taskDone = this.taskDone.bind(this);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  async componentDidMount() {
    this.setState( { todo : tasksData});
  }

  removeTask(task,from) {
    const copyFrom = (from === 'todo' ? [...this.state.todo] : [...this.state.done]);
    const taskToRemove = (from === 'todo' ? 
                          this.state.todo.find(t => t.id === task.props.id) :
                          this.state.done.find(t => t.id === task.props.id)
    );
    copyFrom.splice(copyFrom.indexOf(taskToRemove), 1);
    if (from === 'todo') {
      this.setState( { todo : this.sortTaskList(copyFrom)} );
    } else{
      this.setState( { done : copyFrom} );
    }
  }

  addTask(task) {
    const n = this.state.todo.length+1;
    const taskToAdd = {...task, id : 'T'+n, priority : 0};
    this.setState( {todo : this.sortTaskList([...this.state.todo, taskToAdd])} );
  }

  taskDone(task) {
    const copyTodo = [...this.state.todo];
    const taskToDone = this.state.todo.find(t => t.id === task.props.id);
    const copyDone = this.state.done.concat(taskToDone);
    copyTodo.splice(copyTodo.indexOf(taskToDone), 1);
    this.setState( { todo : copyTodo} );
    this.setState( { done : copyDone});
  }

  taskPriorityChange(level,task) {
    const copyTodo = [...this.state.todo];
    const taskToModify = this.state.todo.find(t => t.id === task.props.id);
    taskToModify.priority = level;
    this.setState( {todo : this.sortTaskList(copyTodo)} );
  }

  sortTaskList(taskList) {
    return taskList.sort(function (t1,t2) {
      return t1.priority - t2.priority;
    }).reverse();
  }

  render() {
    return (
      <div className="taskApp">
        {<AddTask addTask={this.addTask}/>}
        {<Todo todo={this.state.todo} removeTask={this.removeTask} taskDone={this.taskDone} taskPriorityChange={this.taskPriorityChange}/>}
        {<Done done={this.state.done} removeTask={this.removeTask}/>}
      </div>
    );
  }
}
