import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  const info = restaurant?.card?.card?.info;

  if (!info) return null;

  const {
    cloudinaryImageId,
    name,
    cuisines = [],
    avgRating,
    costForTwoMessage,
    sla,
  } = info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt={name}
        src={
          cloudinaryImageId
            ? CDN_URL + cloudinaryImageId
            : "https://via.placeholder.com/150"
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwoMessage}</h4>
      <h4>{sla?.slaString || "N/A"}</h4>
    </div>
  );
};

export default RestaurantCard;
