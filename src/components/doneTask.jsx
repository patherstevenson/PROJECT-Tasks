import Task from './task.jsx'
import PropTypes from 'prop-types';
import RemoveButton from './removeButton.jsx';

import '../assets/style/task.css';

export default class DoneTask extends Task {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="task done">
            <div className="info">
                {this.props.description} ({this.props.duration}mn) (priorité : {this.props.priority})
                <RemoveButton task={this} removeTask={this.props.removeTask}
                from='done'/>
            </div>
      </div>
    );
  }
  static propTypes = {
    description : PropTypes.string.isRequired,
    priority : PropTypes.number.isRequired,
    duration : PropTypes.number,
    removeTask : PropTypes.func.isRequired,
  }
  static defaultProps = {
    duration : 0,
    priority : 1
  }
}
