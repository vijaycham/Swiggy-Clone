import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  const [showItem, setShowItem] = useState(false);
  const handleclick = () => {
    setShowItem(!showItem);
  };
  return (
    <div>
      <div className="w-7/12 mx-auto my-4  bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleclick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          {showItem ? (
            <span className="text-2xl"> 🔼 </span>
          ) : (
            <span className="text-2xl"> 🔽 </span>
          )}
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
