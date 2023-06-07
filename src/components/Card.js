import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ show }) {
  return (
    <div>
      <div className="card">
        <img src={show.show.image.medium} className="card-img-top" alt="..." />

        <div className="overlay">
          <div className="card-body">
            <h5 className="card-title">
              {show.show.name}

              {/* <span>
                {show.show.rating.average ? (
                  ` ⭐${show.show.rating.average}`
                ) : (
                  <></>
                )}
              </span> */}
            </h5>

            <div>{show.show.status}</div>
            <Link to={`/show/${show.show.name}`} className="btn">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
