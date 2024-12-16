import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-start gap-4 border-b border-gray-300 pb-4 mb-4"
        >
          <div className="w-10/12">
            <div className="font-semibold border-b-2 py-2 m-2 text-lg text-left w-6/12">
              <span> {item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-lg text-gray-500 mt-1">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-2/12">
            {item.card.info.imageId ? (
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full h-full object-cover rounded-md"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}
            <div className="absolute mx-16 my-[-18px]">
              <button className="p-1 bg-black text-white rounded-lg ">
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
