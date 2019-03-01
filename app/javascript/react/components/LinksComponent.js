import React from 'react';

const LinksComponent = (props) => {
  return (

    <div className="box">
    <div>
    <a className='font' href={'/users/:id'}>Profile</a>
    </div>
    <div>
    <a className='font'href={'/users/sign_in'}>Home</a>
    </div>
    <div>
    <a className='font' href={'/postings'}>Feed</a>
    </div>
    <div>
    <a className='font' href={'/messages'}>Chatroom</a>
    </div>

    </div>
  );
}

export default LinksComponent;
