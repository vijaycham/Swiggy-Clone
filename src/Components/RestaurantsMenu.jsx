import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestauntsMenu = () => {
  const { resID } = useParams();
  const resInfo = useRestaurantMenu(resID);

  const { name, avgRating, cuisines } =
    resInfo?.cards?.[2]?.card?.card?.info || {};
  const deliveryTime = resInfo?.cards?.[2]?.card?.card?.info?.sla?.deliveryTime;
  const menuItems =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card
      .itemCards || [];
  console.log(menuItems);
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <div className="menu-into-card">
        <h3>{avgRating} stars </h3>
        <h3>{cuisines.join(",")}</h3>
        <h3>Approx. {deliveryTime} minutes </h3>
      </div>
      <div className="item-list">
        <h2>Menu</h2>
        <ul>
          {menuItems.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} -{" Rs. "}
              {item.card.info.price / 100 ||
                item.card.info.finalPrice / 100 ||
                item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestauntsMenu;
