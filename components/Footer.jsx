/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Rule from './Rule';
import Vote from './Vote';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="row py-3 text-center">
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
          <div className="col-6">
            <small>
              {`© ${year} Friends of Jason Morris.`}
              <br />
              All rights reserved.
            </small>
          </div>
          <div className="col-6 text-right">
            <ul className="list-inline">
              <li className="list-inline-item mr-3">
                <Link href="https://www.facebook.com/JasonMorris4KPS-103854908123702">
                  <a target="blank">
                    <img
                      alt="Connect with JasonMorris4KPS on Facebook"
                      src="images/f_logo_white.svg"
                      width="40"
                    />
                  </a>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="http://m.me/103854908123702">
                  <a target="blank">
                    <img
                      alt="Connect with JasonMorris4KPS on Messenger"
                      src="images/m_logo_white.svg"
                      width="40"
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
