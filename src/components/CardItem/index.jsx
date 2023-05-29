import { useNavigate } from "react-router-dom";
import style from "./cardItem.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { changeFavourites } from "../../redux/slices/favouritesSlice";

export const CardItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (product) {
    const discountPrice = product.price * (1 - product.discount / 100);

    return (
      <div className={style.card}>
        <div className={style.imageBox}>
          <img
            src={product.pictures}
            alt="Фото Продукта"
            className={style.imageProduct}
          />
        </div>
        {product.discount ? (
          <p className={style.price}>
            <s>{product.price} ₽</s> <b>{Math.ceil(discountPrice)} ₽</b>
          </p>
        ) : (
          <p className={style.price}>
            <b>{product.price} ₽</b>
          </p>
        )}
        {product.wight !== undefined ? (
          <p className={style.quantity}>{product.wight}</p>
        ) : (
          <p className={style.quantity}>- </p>
        )}
        <div className={style.productName}>{product.name}</div>
        <div className={style.buttonNavigation}>
          <div className={style.prittyButton}>
            <button onClick={() => dispatch(addToCart(product._id))}>
              В корзину
            </button>
            <button onClick={() => navigate(`/products/${product._id}`)}>
              Подробнее
            </button>
          </div>
          <div className={style.likeButtonSection}>
            <button onClick={() => dispatch(changeFavourites(product._id))} className={style.likeButton}>
              like
            </button>
          </div>
        </div>
      </div>
    );
  }
};
