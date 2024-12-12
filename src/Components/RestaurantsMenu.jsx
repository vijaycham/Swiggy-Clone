import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestauntsMenu = () => {
  const { resID } = useParams();
  const resInfo = useRestaurantMenu(resID);

  const { name, avgRating, cuisines } =
    resInfo?.cards?.[2]?.card?.card?.info || {};
  const deliveryTime = resInfo?.cards?.[2]?.card?.card?.info?.sla?.deliveryTime;
  const menuItems =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card
      .itemCards || [];
  console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu text-center">
      <h1 className="font-bold my-6 text-2xl ">{name}</h1>
      <div className="menu-into-card">
        <h3 className="font-bold text-lg">{avgRating} stars </h3>
        <h3 className="font-bold text-lg"> {cuisines.join(",")}</h3>
        {categories.map((category) => (
          <RestaurantCategory data={category?.card?.card} />
        ))}
      </div>
    </div>
  );
};
export default RestauntsMenu;
