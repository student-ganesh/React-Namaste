import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import RestoItemList from "./RestoItemList";
// 💡 import your component

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [openIndex, setOpenIndex] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    console.log("handledButton clicked");
    setCartItems((prevItems) => [...prevItems, item]);
    console.log("Item added:", item.name);
  };

  const restaurantInfo = resInfo?.cards?.find((card) => card?.card?.card?.info)
    ?.card?.card?.info;

  const { name, cuisines, costForTwoMessage } = restaurantInfo || {};

  // Safe category extraction
  let categories = [];
  const groupCardSection = resInfo?.cards?.find((card) => card?.groupedCard);
  const regularCards =
    groupCardSection?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  if (regularCards) {
    categories = regularCards.filter(
      (c) => c?.card?.card?.title && Array.isArray(c?.card?.card?.itemCards)
    );
  }

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="Menu text-center p-2 m-2">
      <h1 className="font-bold my-7 text-2xl">{name}</h1>
      <h3 className="font-bold">{cuisines?.join(", ")}</h3>
      <p>{costForTwoMessage || ""}</p>

      <h2 className="font-bold my-5">👀 Menu 👀</h2>

      {categories.length === 0 ? (
        <p className="text-gray-500 italic">
          No menu available for this restaurant!😕
        </p>
      ) : (
        <div className="accordion-container text-left max-w-xl mx-auto">
          {categories.map((category, index) => (
            <RestaurantCategory
              key={category.card.card.title}
              category={category}
              isOpen={index === openIndex}
              onToggle={() => setOpenIndex(index === openIndex ? null : index)}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
