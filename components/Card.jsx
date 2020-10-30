import React from 'react';
import Image from 'next/image';

function Card({source, title, caption}) {
  return(
    <div className="card">
      <Image
        src={source}
        className="card-img-top"
        alt={title}
        width="720"
        height="420"
      />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{title}</h5>
        <p 
          className="card-text"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: caption}}
        />
      </div>
    </div>
  );
}

export default Card;
