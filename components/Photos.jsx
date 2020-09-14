import React from 'react';
import Card from './Card';

function Photos() {
  return(
    <div className="container">
      <div className="row">
        <div className="col-lg-4 mb-3">
          <Card
            source="images/glamour1-cropped.jpg"
            title="Lorem ipsum dolor sit amet"
            caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis risus sed vulputate odio ut."
          />
        </div>
        <div className="col-lg-4 mb-3">
          <Card
            source="images/glamour2-cropped.jpg"
            title="Kalamazoo Central Maroon Giants Hall of Fame Dinner"
            caption="Jermaine Jackson Kalamazoo Public Schools School Board Trustee and Von Washington Jr. EXECUTIVE DIRECTOR Community relations Kalamazoo Promise"
          />
        </div>
        <div className="col-lg-4 mb-3">
          <Card
            source="images/glamour3-cropped.jpg"
            title="Lorem ipsum dolor sit amet"
            caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis risus sed vulputate odio ut."
          />
        </div>
      </div>
    </div>
  );
}

export default Photos;
