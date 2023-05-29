import { useDispatch, useSelector } from "react-redux";
import style from "./cartItem.module.css";
import {
  decrementCart,
  deleteFromCart,
  incrementCart,
} from "../../redux/slices/cartSlice";

export const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const productInCart = useSelector(
    (state) => state.cart.find((el) => el._id === product._id)
  );

  const handleIncrement = () => {
    dispatch(incrementCart(product._id));
  };
  const handleDecriment = () => {
    dispatch(decrementCart(product._id));
  };
  const handleDeleteCart = () => {
    dispatch(deleteFromCart(product._id));
  };

  const discountPrice = product.price * (1-product.discount/100)

  return (
    <div className={style.card}>
      <div className={style.img}>
        <img src={product.pictures} alt="" />
      </div>
      <div className={style.info}>
        <p>Название: {product.name}</p>
        <p>Доступно: {product.stock}</p>
        {product.wight?<p>Количество: {product.wight}</p>:<p>Количество: -</p>}
        {product.discount > 0 ? <p>Cкидка: {product.discount}%</p> : ''}
      </div>
      <div className={style.btn}>
        <button
          onClick={() => handleDecriment()}
          className={style.decorationButton}
        >
          -
        </button>
        <span>{productInCart?.count}</span>
        <button
          onClick={() => handleIncrement()}
          disabled={productInCart?.count === product.stock ? true : false}
          className={style.decorationButton}
        >
          +
        </button>
      </div>
      <div className={style.overAllprice}>
        <p>{Math.ceil(discountPrice) * productInCart?.count}p</p>
      </div>
      <div className={style.dlt}>
        <button onClick={() => handleDeleteCart()} className={style.deleteBtn}>
          Удалить
        </button>
      </div>
    </div>
  );
};
