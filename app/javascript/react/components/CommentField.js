import React from 'react';


const CommentField = (props) => {
  return (


    <label>{props.label}
    <textarea className="form-control-status-box"
      name={props.name}
      type='text'
      value={props.content}
      onChange={props.handleChange}
    />
    </label>

  );
}

export default CommentField;
