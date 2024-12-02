import RestaurantCard from "./RestaurantCard.jsx"
import resList from "../utils/mockData.jsx";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search-bar"></div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
