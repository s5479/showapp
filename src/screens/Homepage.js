import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Loder from "../components/Loder";

function Homepage() {
  const [showlist, setShowlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request();
  }, []);

  const request = async () => {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const data = await response.json();
    setShowlist(data);
    setLoading(false);
  };

  return (
    <div>
      <Navbar />
      {loading ? (
        <>
          <Loder />
        </>
      ) : (
        <>
          <div className="d-flex m-5 justify-content-center flex-wrap">
            {showlist.map((show) => (
              <Card show={show} key={show.show.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Homepage;
