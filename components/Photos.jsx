import React from 'react';
import Card from './Card';
import photos from '../data/photos.json';

function Photos() {
  return(
    <div className="container">
      <div className="row">
        {photos.reverse().map((photo) => {
          return(
            <div key={photo.id} className="col-lg-4 mb-3">
              <Card
                source={photo.source}
                title={photo.title}
                caption={photo.caption}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Photos;
