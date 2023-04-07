import { useNavigate } from "react-router-dom";
import style from "./cardItem.module.css";

export const CardItem = ({ product }) => {
  const navigate = useNavigate();

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
          <button>
            <b>В корзину</b>
          </button>
          <button onClick={() => navigate(`${product["_id"]}`)}>
            <b>Подробнее</b>
          </button>
        </div>
      </div>
    );
  }
};
