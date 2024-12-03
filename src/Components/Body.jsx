import RestaurantCard from "./RestaurantCard.jsx"
import resList from "../utils/mockData.jsx";
import { useState } from "react"; 

const Body = () => {
    const [listOfRestaurants, setListofRestaurant] = useState(resList);
  // let listOfRestaurants2 = [
  //   {
  //     info: {
  //       id: "6448",
  //       name: "A2B - Adyar Ananda Bhavan",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/4/85542b62-ca6d-4bb0-b626-f4eda39ec1a3_6448.jpg",
  //       costForTwo: "₹300 for two",
  //       cuisines: ["South Indian", "Sweets", "Chinese"],
  //       avgRating: 4.5,
  //       sla: {
  //         deliveryTime: 27,
  //       },}},
  //        {
  //     info: {
  //       id: "6448",
  //       name: "Saravana Bavan",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/4/85542b62-ca6d-4bb0-b626-f4eda39ec1a3_6448.jpg",
  //       costForTwo: "₹300 for two",
  //       cuisines: ["South Indian", "Sweets", "Chinese"],
  //       avgRating: 3.9,
  //       sla: {
  //         deliveryTime: 27,
  //       },}}
  // ]
  return (
    <div className="body-container">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
        const  filteredList = listOfRestaurants.filter((res)=> res.info.avgRating>4) 
        setListofRestaurant(filteredList); 
        }}> Top Rated restaurant </button>
      </div>
      <div className="res-container">
  
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
