import React from 'react';
import PropTypes from 'prop-types';
import icon from "../assets/images/removeButton.png";

import '../assets/style/removeButton.css';

export default class removeButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.removeTask(this.props.task,this.props.from);
  }

  render() {
    return (
      <div className="removeButton">
          <img src={icon} width="10px" onClick={this.handleClick}/>
      </div>
    );
  }
  static propTypes = {
    task : PropTypes.object.isRequired,
    removeTask : PropTypes.func.isRequired,
    from : PropTypes.func.isRequired
  }
}
