import React from 'react';
import Rule from './Rule';
import Vote from './Vote';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="text-center">
      <div className="container">
        <div className="row py-3">
          <div className="col-md-5 pb-3 mt-2">
            <Vote />
          </div>
          <div className="col-md-7">
            <p className="display-4 text-light text-capitalize font-italic">
              Committed to our district for the long term!
            </p>
          </div>
        </div>
        <Rule container={false} light />
        <div className="row text-light pb-4">
          <small>
            {`© ${year} Friends of Jason Morris.`}
            <br />
            All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
