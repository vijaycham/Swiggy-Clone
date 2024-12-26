import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    sla: { deliveryTime },
  } = resData?.info || {};

  return (
    <div data-testid="resCard" className="res-card w-56 h-[400px] overflow-hidden m-2 bg-gray-100 rounded-l border-2 border-col ">
      <img
        className="res-image object-cover w-56 h-56 rounded-l"
        alt={`${name}-logo`}
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="font-bold pt-2 text-lg pl-2">{name}</h3>
      <h4 className="py-1 text-lg pl-2">{cuisines.join(", ")} </h4>
      <h4 className="text-lg pl-2">{avgRating} stars</h4>
      <h4 className="py-1 text-lg pl-2">{costForTwo}</h4>
      <h4 className="text-lg pl-2">{deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedLabel = () => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg ">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
