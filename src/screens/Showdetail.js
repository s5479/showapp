import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Showdetail.css";
import Loder from "../components/Loder";
function Showdetail() {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState([]);

  useEffect(() => {
    const request = async () => {
      setLoading(true);
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${name}`
      );
      const data = await response.json();
      setShow(data[0]);
      setLoading(false);
    };
    request();
  }, []);
  console.log(show);

  return (
    <div className="Showdetail">
      {loading ? (
        <>
          <Loder />
        </>
      ) : (
        <>
          <div className="imageBox">
            <img src={show.show.image.original} alt="" />
          </div>
          <div className="w-50">
            <h2>{show.show.name}</h2>
            <span>
              {show.show.rating.average ? (
                <>{show.show.rating.average} ⭐</>
              ) : (
                <></>
              )}
            </span>
            <span>{show.show.status}</span>
            <p>{show.show.averageRuntime} mins</p>
            <p> Release date: {show.show.premiered}</p>
            {show.show.genres.map((genre) => (
              <>
                <span className="genre">{genre}</span>
              </>
            ))}
            <h4>Description</h4>
            <p className="summary">{`${show.show.summary}`}</p>

            <Link to={`/book/${show.show.name}`} className="bttn">
              Book Now
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Showdetail;
