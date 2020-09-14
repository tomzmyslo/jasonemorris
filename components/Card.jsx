import React from 'react';

function Card({source, title, caption}) {
  return(
    <div className="card">
      <img
        src={source}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{title}</h5>
        <p className="card-text">{caption}</p>
      </div>
    </div>
  );
}

export default Card;
