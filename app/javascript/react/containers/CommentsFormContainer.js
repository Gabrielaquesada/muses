import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import BodyField from '../components/BodyField';



class CommentsFormContainer extends Component {
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
    this.props.addNewComments(formPayload);
    this.handleClear()
  }

  handleClear() {
    this.setState({
      description: ''
    })
  }

  render() {
	    return(
	      <form className="new-posting-form callout" onSubmit={this.handleSubmit}>
        <BodyField
	          content={this.state.description}
	          label="Post"
	          name="Post"
	          handleChange={this.handleDescriptionChange}
	        />
	        <div className="button-group">
	          <input className="button" type="submit" value="Submit" />
	        </div>
	      </form>
	    )
	  }
	}


export default CommentsFormContainer;
