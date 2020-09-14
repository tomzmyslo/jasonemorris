import React from 'react';
import List from './List';
import Rule from './Rule';

function Hero() {
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6 pt-0 px-3 pb-3">
          <img
            src="images/jason-morris-portrait.jpg"
            className="img-fluid img-thumbnail"
            alt="Jason Morris Portrait"
          />
        </div>
        <div className="col-md-6 text-center">
          <h1 className="mb-0 font-weight-bold">
            Re-Elect
            <br className="d-none d-sm-block d-lg-none" />
            {' '}
            Jason E. Morris
          </h1>
          <p className="font-weight-bold font-italic mb-0">for</p>
          <p className="lead">
            Kalamazoo Public School Board
          </p>
          <Rule container={false} />
          <List />
        </div>
      </div>
    </div>
  );
}

export default Hero;
