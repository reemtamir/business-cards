import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
  const {
    bizName: name,
    bizPhone: phone,
    bizAddress: address,
    bizDescription: description,
    bizImage: img,
    _id: id,
  } = card;
  return (
    <>
      <div className="box ">
        <div className="content">
          <div className="details-and-img">
            <div className="details">
              <h5>
                {name} <span className="title">, Partner</span>
              </h5>
              <p className="phone">{phone}</p>
              <p className="address">{address}</p>
            </div>
            <img src={img} className="img" alt={`${name}'s image`} />
          </div>
          <p className="description">{description}</p>
        </div>
     
    
          <Link to={`/edit-card/${id}`} className=" link ">
            <i className="bi bi-pencil-square"> Edit Card</i>
          </Link>
          <Link to={`/delete-card/${id}`} className="link text-danger ">
            <i className="bi bi-trash3 ">Delete Card</i>
          </Link>
      
      </div>
    </>
  );
};

export default Card;
