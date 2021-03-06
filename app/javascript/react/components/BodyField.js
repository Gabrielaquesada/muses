import React from 'react';


const BodyField = (props) => {
  return (

<div className='cell small-6'>
    <label>{props.label}
    <textarea className="form-control-status-box" rows="2" placeholder="What are you looking for?"
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
