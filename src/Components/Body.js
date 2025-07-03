import RestaurantCards, { withIsOpen } from "./RestaurantCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Body = () => {
  const [restoList, setRestoList] = useState([]); // master list
  const [filteredList, setFilteredList] = useState([]); // display list
  const [searchText, setSearchText] = useState("");

  const ResCardsWithIsOpen = withIsOpen(RestaurantCards);

  const { loggedInUser, setUserName } = useContext(UserContext);

  // console.log(restoList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.7049873&lng=74.24325270000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurantCards = json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    if (Array.isArray(restaurantCards)) {
      setRestoList(restaurantCards);
      setFilteredList(restaurantCards); // sync both
    } else {
      setRestoList([]);
      setFilteredList([]);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Ooopppps!May Your connection is Weak,Please check it!!</h1>;

  if (restoList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div data-testid="resCard" className="body">
      <div className="filter flex items-center px-4">
        <div className="search m-2 p-2">
          <input
            data-testid="searchInp"
            type="text"
            className="m border border-solid"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            aria-label="Search"
            className="m-2 px-1 py-0.5 bg-gray-200 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredResto = restoList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filteredResto);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="px-2 py-1.5 bg-gray-200 border cursor-pointer"
          onClick={() => {
            const topRated = restoList.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilteredList(topRated);
          }}
        >
          Top Rated Choices
        </button>
        <div>
          <label className="m-2">User Name: </label>
          <input
            className="p-1 border border-black"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <ResCardsWithIsOpen resData={restaurant.info} />
            ) : (
              <RestaurantCards resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
