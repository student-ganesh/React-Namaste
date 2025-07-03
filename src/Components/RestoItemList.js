import { CDN_URL } from "../utils/constant";
import RestaurantMenu from "./RestaurantMenuPage";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestoItemList = ({ itemCards, categoryImage }) => {
  const dispatch = useDispatch();

  const handleAddCart = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="p-4 bg-white">
      {/* Category-level image */}
      {categoryImage && (
        <div className="mb-4 ">
          <img
            src={CDN_URL + categoryImage}
            alt="Category"
            className="w-full h-20 object-cover rounded-lg shadow"
          />
        </div>
      )}

      <ul className="list-none ml-2">
        {itemCards?.map((itemWrapper, index) => {
          const item = itemWrapper?.card?.info || itemWrapper;
          if (!item) return null;

          return (
            <li
              data-testid="foodItems"
              key={item.id}
              className="flex justify-between items-start gap-4 py-3 border-b border-gray-200"
            >
              {/* Dish image */}
              {item.imageId || item.cloudinaryImageId ? (
                <img
                  src={CDN_URL + (item.imageId || item.cloudinaryImageId)}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded cursor-pointer"
                />
              ) : (
                <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                  No Img
                </div>
              )}

              {/* Name, price, desc */}
              <div className="flex-1">
                <h4 className="font-medium text-base break-words cursor-pointer">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-600 mb-1">
                  ₹{(item.price || item.defaultPrice) / 100}
                </p>
                {item.description && (
                  <p className="text-xs text-gray-500 ">{item.description}</p>
                )}
              </div>
              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddCart(item)}
                className="p-2 px-3 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer"
              >
                Add+
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestoItemList;
