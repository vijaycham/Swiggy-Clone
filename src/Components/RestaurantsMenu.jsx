import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestauntsMenu = () => {
  const { resID } = useParams();
  const resInfo = useRestaurantMenu(resID);
  const [showIndex, setShowIndex] = useState(null);

  const { name, avgRating, cuisines } =
    resInfo?.cards?.[2]?.card?.card?.info || {};
  const deliveryTime = resInfo?.cards?.[2]?.card?.card?.info?.sla?.deliveryTime;
  const menuItems =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card
      .itemCards || [];
  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu text-center">
      <h1 className="font-bold my-6 text-2xl ">{name}</h1>
      <div className="menu-into-card">
        <h3 className="font-bold text-lg">{avgRating} stars </h3>
        <h3 className="font-bold text-lg"> {cuisines.join(",")}</h3>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItem={index === showIndex}
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestauntsMenu;
