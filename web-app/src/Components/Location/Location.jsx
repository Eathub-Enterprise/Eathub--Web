import React from "react";
import "./location.css";
import graph from '../../Assets/images/Graph.png';

const Location = () => {
  // static data

  const data = {
    places: [
      {
        id: 1,
        value: "Alimosho",
        population: 80,
        src: "../../Assets/images/Graph.png",
        alt:"image 1"
      },
      {
        id: 2,
        value: "Epe",
        population: 70,
        src: "../../Assets/images/Graph.png",
        alt:"image 2"
      },
      {
        id: 3,
        value: "Apapa",
        population: 50,
        src: "../../Assets/images/Graph.png",
        alt:"image 3"
      },
      {
        id: 4,
        value: "Somolu",
        population: 100,
        src: "../../Assets/images/Graph.png",
        alt:"image 4"
      },
      {
        id: 5,
        value: "Agege",
        population: 80,
        src: "../../Assets/images/Graph.png",
        alt:"image 5"
      },
      {
        id: 6,
        value: "Surulere",
        population: 910,
        src: "../../Assets/images/Graph.png",
        alt:"image 6"
      },
      {
        id: 7,
        value: "Badagry",
        population: 0,
        src: "../../Assets/images/Graph.png",
        alt:"image 7"
      },
      {
        id: 8,
        value: "Lagos Island",
        population: 20,
        src: "../../Assets/images/Graph.png",
        alt:"image 8"
      },
      {
        id: 9,
        value: "Ajah",
        population: 500,
        src: "../../Assets/images/Graph.png",
        alt:"image 9"
      },
    ],
  };
  return (
    <div className="charts-location">
      <h5>Customer's Location</h5>
      <div className="location-container">
        <div className="charts-places">
          <ul>
            {data.places.map((place) => (
              <li key={place.id}>{place.value}</li>
            ))}
          </ul>
        </div>
        <div className="location-numbers">
          <ul>
            {data.places.map((place) => (
              <li key={place.id}>{place.population}</li>
            ))}
          </ul>
        </div>
        <div className="location-graph">
          <ul>
            {data.places.map((place) => (
              <li key={place.id}>
                <img src={graph} alt={place.alt} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Location;
