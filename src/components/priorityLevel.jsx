import React from 'react';
import PropTypes from 'prop-types';

import '../assets/style/priorityLevel.css';

export default class PriorityLevel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active : this.props.active};
    this.handleClick = this.handleClick.bind(this);
    this.ref = React.createRef();
  }

  componentDidUpdate(prevprops) {
    if(this.props.active !== prevprops.active) {
      this.setState( {active: !this.state.active});
    }
  }

  handleClick(){
    this.props.taskPriorityChange(this.props.value,this.props.task);
  }

  render() {
    return (
    <div className={this.state.active ? "on" : "off"} onClick={this.handleClick} ref={this.ref}>
        <div className="level"/>
    </div>
    );
  }
  static propTypes = {
    priority : PropTypes.number.isRequired,
    active : PropTypes.bool.isRequired,
    value : PropTypes.number.isRequired,
    task : PropTypes.object.isRequired,
    taskPriorityChange : PropTypes.func.isRequired
  }
}


