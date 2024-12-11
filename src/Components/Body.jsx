import RestaurantCard , { withPromotedLabel } from "./RestaurantCard.jsx";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router-dom";
import { HOME_URL } from "../utils/constants.jsx";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";


const Body = () => {
  const [listOfRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState(" ");

   const RestaurantCardOpen = withPromotedLabel(RestaurantCard)
  console.log("Body rendered");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(HOME_URL);
    const json = await data.json();
    setListofRestaurants(
      json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1> Look's like your offline. Please check your internet connection.</h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter flex">
        <div className="search ">
          <input
            type="text"
            className="search-box border-2 px-4 py-1 border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="border-none bg-green-500 rounded-xl text-white m-4 px-4 py-2"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="filter-btn border-none bg-gray-500 rounded-xl text-white m-4 px-4 py-2"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setListofRestaurants(filteredList);
            }}
          >
            Top Rated restaurant
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (<RestaurantCardOpen resData={restaurant}/>) :(
            <RestaurantCard resData={restaurant} /> )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
