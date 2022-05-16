import React from 'react';
import PropTypes from 'prop-types';

import '../assets/style/addtask.css';


export default class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = ( {description : '', duration: 0} );
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleDuration = this.handleDuration.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addTask(this.state);
    this.setState ( { description : '', duration : 0});
  }

  handleDescription(event) {
    this.setState( { description : event.target.value} );
  }

  handleDuration(event) {
    this.setState( { duration : parseInt(event.target.value)} );
  }

  render() {
    return (
      <div className="addTask">
          <input type="text" placeholder="description" value={this.state.description} onChange={this.handleDescription} />
          <input type="number" min="0" value={this.state.duration} onChange={this.handleDuration}/>
          mn
          <button onClick={this.handleSubmit}>Ajouter</button>
      </div>
    );
  }
  static propTypes = {
    addTask : PropTypes.func.isRequired
  }
}
