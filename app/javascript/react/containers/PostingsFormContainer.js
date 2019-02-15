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
        <div className='cell'>
	      <form className='grid-x align-center' onSubmit={this.handleSubmit}>
        <BodyField
	          content={this.state.description}
	          label=""
	          name="Post"
	          handleChange={this.handleDescriptionChange}
	        />
            <div className='cell text-center'>
	          <input className="button" type="submit" value="Post" />
            </div>

	      </form>
        </div>
	    )
	  }
	}


export default PostingsFormContainer;
