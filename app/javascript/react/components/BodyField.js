import React from 'react';


const BodyField = (props) => {
  return (

    <div className="columns">
    <label>{props.label}
    <textarea rows="5" className="row input-box-container"
      name={props.name}
      type='text'
      value={props.content}
      onChange={props.handleChange}
    />
    </label>
    </div>
  );
}

export default BodyField;
