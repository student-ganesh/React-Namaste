import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurantCards = ({ resData }) => {
  const {
    id,
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    locality,
  } = resData;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div
      data-testid="resCard"
      className="res-cards rounded-md m-4 p-4 w-48 h-110  bg-gray-100 hover:bg-amber-200 "
    >
      <img
        className="restlogo rounded-lg"
        alt={name}
        src={`${CDN_URL}${cloudinaryImageId}`}
        onError={(e) =>
          (e.target.src = "https://via.placeholder.com/150?text=No+Image")
        }
      />

      <h4 className="font-bold py-1 text-shadow-lg">{name}</h4>
      <h5>{cuisines?.join(", ")}</h5>
      <h5>{avgRating} ⭐</h5>
      <h5>{sla?.slaString}</h5>
      <h5>{costForTwo}</h5>
      <h5>{locality}</h5>
      <h5>{loggedInUser}</h5>
    </div>
  );
};

// Higher Order Function:

export const withIsOpen = (RestaurantCardsComp) => {
  return (props) => {
    return (
      <div>
        <span className="absolute bg-green-400 text-white text-xs px-2 py-1  rounded-lg animate-pulse">
          Open
        </span>

        <RestaurantCardsComp {...props} />
      </div>
    );
  };
};
export default RestaurantCards;
