import ItemList from "./ItemList";


const RestaurantCategory = ({ data ,showItem, setShowIndex}) => {
 
  const handleclick = () => {
      setShowIndex()
  };
  return (
    <div>
      <div className="w-8/12 mx-auto my-6  bg-gray-50 shadow-xl p-6">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleclick}
        >
          <span className="font-semibold text-xl">
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
