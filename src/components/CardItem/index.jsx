import { useNavigate } from "react-router-dom";
import style from "./cardItem.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

export const CardItem = ({ product }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const handleAddToCart = (event) => {
    event.stopPropagation()

    // Логика добавления 
    dispatch(addToCart(product._id))
  }

  if (product.name) {
    return (
      <div className={style.card}>
        <div className={style.imageBox}>
          <img
            src={product.pictures}
            alt="Фото Продукта"
            className={style.imageProduct}
          />
        </div>
        <p className={style.price}>
          <b>{product.price} ₽</b>
        </p>
        <p className={style.quantity}>{product.wight}</p>
        <div className={style.productName}>{product.name}</div>
        <div className={style.prittyButton}>
          <button onClick={(event) => handleAddToCart(event)}>
            В корзину
          </button>
          <button onClick={() => navigate(`${product["_id"]}`)}>
            Подробнее
          </button>
        </div>
      </div>
    );
  }
};
