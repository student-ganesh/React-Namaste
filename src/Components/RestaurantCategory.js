import { useState } from "react";
import RestoItemList from "./RestoItemList";
import RestaurantMenu from "./RestaurantMenuPage";

const RestaurantCategory = ({ category, isOpen, onToggle }) => {
  const { title, itemCards, image } = category?.card?.card;
  // console.log(category);
  return (
    <div className="border border-b-1.5  mb-2 rounded-md shadow-lg">
      {/* Accordion Header */}
      <div
        className="cursor-pointer p-4 bg-gray-200 font-semibold flex justify-between items-center"
        onClick={onToggle}
      >
        <span>
          {title} ({category.card?.card?.itemCards?.length})
        </span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* Accordion Body */}
      {isOpen && <RestoItemList itemCards={itemCards} categoryImage={image} />}
    </div>
  );
};

export default RestaurantCategory;
