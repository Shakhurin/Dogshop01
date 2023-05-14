import { useDispatch, useSelector } from "react-redux";
import style from "./cartItem.module.css";
import { decrementCart, deleteFromCart, incrementCart } from "../../redux/slices/cartSlice";

export const CartItem = ({ product }) => {
  const dispatch = useDispatch()

  const count = useSelector((state) => state.cart.find(el => el._id === product._id).count)

  const handleIncrement = () =>{
    dispatch(incrementCart(product._id))
  }
  const handleDecriment = () =>{
    dispatch(decrementCart(product._id))
  }
  const handleDeleteCart = () =>{
    dispatch(deleteFromCart(product._id))
  }

  return (
    <>
      <div className={style.card}>
        <div>
          <img src={product.pictures} alt="" />
        </div>
        <div>
          <p>{product.name}</p>
        </div>
        <div>
          <button onClick={()=>handleDecriment()} className={style.decorationButton}>-</button>
            <span>{count}</span>
          <button onClick={()=>handleIncrement()} disabled={count===product.stock?true:false} className={style.decorationButton}>+</button>
        </div>
        <div>
          <p>{product.price*count}</p>
        </div>
        <div>
          <button onClick={()=>handleDeleteCart()} className={style.deleteBtn}>Удалить</button>
        </div>
      </div>
    </>
  );
};
