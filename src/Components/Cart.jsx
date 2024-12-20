import { clearcart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearcart());
  };
const hasCartItems = cartItems.length > 0;
  return (
    <div className=" text-center mx-4 p-4">
      
      <h1 className="font-bold text-3xl text-center m-4 "> {hasCartItems ? `Cart Items 😋` : `Cart Items 😐` } </h1>
      <div className="  border-gray-300 w-8/12 m-auto">
        {hasCartItems ? ( <>
          <button
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button> 
        <ItemList items={cartItems} /> </> ) : (
          <h1 className="font-bold text-3xl">
            Cart is empty, Add items to the cart !!!
          </h1> 
        )}
      </div>
    </div>
  );
};

export default Cart;
