import React from 'react';
import PropTypes from 'prop-types';
import icon from "../assets/images/doneButton.png";

import '../assets/style/doneButton.css';

export default class DoneButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.taskDone(this.props.task);
  }

  render() {
    return (
      <div className="doneButton">
          <img src={icon} width="12px" onClick={this.handleClick}/>
      </div>
    );
  }
  static propTypes = {
    task : PropTypes.object.isRequired,
    taskDone : PropTypes.func.isRequired
  }
}
