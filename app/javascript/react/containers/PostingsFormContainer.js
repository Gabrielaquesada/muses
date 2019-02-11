import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import BodyField from '../components/BodyField';



class PostingsFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ''
    }
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      description: this.state.description
  };
    this.props.addNewPostings(formPayload);
    this.handleClear()
  }

  handleClear() {
    this.setState({
      description: ''
    })
  }

  render() {
    return(
      <div className="status-update-input-box">
        <form className="" onSubmit={this.handleSubmit}>
        <BodyField
          content={this.state.description}
          label=""
          name="Post"
          handleChange={this.handleDescriptionChange}
        />

        <div className="user-submit-box">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    </div>
    )
  }
}


export default PostingsFormContainer;
