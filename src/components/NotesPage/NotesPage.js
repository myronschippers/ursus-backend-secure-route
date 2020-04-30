import React, {Component} from 'react';
import { connect } from 'react-redux';

class NotesPage extends Component {
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_SECRETS'});
  }

  render() {
    return (
      <div>
        <p>Currently logged in as <b>{this.props.user.username}</b></p>
        <p>Clearance level: <b>{this.props.user.access_level}</b></p>
        <ul>
          <li>List Notes</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
  user: state.user,
});

export default connect(mapStateToProps)(NotesPage);
