import React from 'react';

function Navbar() {
  return(
    <div className="navbar navbar-dark" style={{backgroundColor: '#1A428A'}}>
      <div className="container">
        <a className="navbar-brand" href="/">Jason E. Morris</a>
        <span className="text-light text-uppercase font-italic font-weight-bold">Vote For Experience</span>
      </div>
    </div>
  );
}

export default Navbar;
