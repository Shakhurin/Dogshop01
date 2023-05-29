import { useDispatch } from "react-redux";
import style from "./favouritesItem.module.css";
import { changeFavourites } from "../../redux/slices/favouritesSlice";
import { addToCart } from "../../redux/slices/cartSlice";

export const FavouritesItem = ({ product }) => {
  const dispatch = useDispatch();
  const discountPrice = product.price * (1-product.discount/100)


  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        <div className={style.img}>
          <img src={product.pictures} alt="" />
        </div>
        <div className={style.info}>
          <p>Название: {product.name}</p>
          <p>Цена: {Math.ceil(discountPrice)}р</p>
          <p>Скидка: {product.discount ? `${product.discount}%` : "-"}</p>
          <p>Количество: {product.wight? product.wight : "Не указано"}</p>
        </div>
        <div className={style.btn}>
          <button onClick={() => dispatch(changeFavourites(product._id))}>
            Удалить
          </button>
          <button onClick={() => dispatch(addToCart(product._id))}>
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};
