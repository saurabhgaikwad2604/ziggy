import { useState } from "react";
import resObj from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [resturantsList, setResturantsList] = useState(resObj);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resturantsList.filter(
              (restuarant) => restuarant.info.avgRating > 4
            );
            setResturantsList(filteredList);
          }}
        >
          Top Rated Restuarant
        </button>
      </div>

      <div className="res-container">
        {resturantsList.map((restaurant) => (
          <RestaurantCard key={restaurant?.info.id} restaurant={restaurant} />
        ))}
        ;
      </div>
    </div>
  );
};

export default Body;
