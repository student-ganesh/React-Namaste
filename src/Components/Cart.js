import { useDispatch, useSelector } from "react-redux";
import RestoItemList from "./RestoItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className=" text-center m-5 p-5 flex-col">
      <h1 className="text-2xl py-2.5 font-bold">WelCome To Our Cart..!</h1>
      <div>
        <button
          className=" bg-red-400 cursor-pointer rounded-md"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItem.length == 0 && (
          <h1 className="py-10">Oh...You Might Forgot To add!!</h1>
        )}
        <div className="justify-center px-40">
          <RestoItemList itemCards={cartItem} />
        </div>
      </div>
    </div>
  );
};
export default Cart;
