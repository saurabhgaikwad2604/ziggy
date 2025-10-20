import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants.js";

const Body = () => {
  const [resturantsList, setResturantsList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);

    const json = await data.json();

    const restaurants =
      json?.data?.cards?.[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards?.filter(
        (card) => card?.card?.card?.info
      ) || [];

    setResturantsList(restaurants);
    setFilteredRestaurant(restaurants);
  };

  return resturantsList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            name="search"
            className="search-bar"
            placeholder="Search for restaurant"
            onChange={(e) => {
              const filteredRestaurant = resturantsList.filter((restaurant) =>
                restaurant.card?.card.info.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          />
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resturantsList.filter(
              (restaurant) => restaurant.card?.card.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restuarant
        </button>
      </div>

      <div className="res-container">
        {Array.isArray(resturantsList) &&
          filteredRestaurant.map((restaurant) => {
            const id = restaurant?.card?.card?.info?.id;
            return id ? (
              <RestaurantCard key={id} restaurant={restaurant} />
            ) : null;
          })}
      </div>
    </div>
  );
};

export default Body;
