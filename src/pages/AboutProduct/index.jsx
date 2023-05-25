import { useParams } from "react-router-dom";
import style from "./style.module.css";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { changeFavourites } from "../../redux/slices/favouritesSlice";
import { addToCart } from "../../redux/slices/cartSlice";

export const AboutProduct = () => {
  const { idOfProduct } = useParams();
  const { token } = useAuth();
  const dispatch = useDispatch()

  const { data: product } = useQuery({
    queryKey: ["productInfo", idOfProduct],
    queryFn: async () => {
      const res = await fetch(
        `https://api.react-learning.ru/products/${idOfProduct}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const responce = await res.json();

      return responce;
    },
  });

  if (product) {
    return (
      <div className={style.wrapper}>
        <div className={style.productImg}>
          <img src={product.picture} alt="Изображение товара" />
        </div>
        <div className={style.information}>
          <p>Название: {product.name}</p>
          <p>Описание: {product.description}</p>
          <p>Цена: {product.price}</p>
          <p>Осталось: {product.stock}</p>
          <p>Количество: {product.wight}</p>
        </div>
        <div>
        <button onClick={() => dispatch(changeFavourites(product._id))}>like</button>
        <button onClick={() => dispatch(addToCart(product._id))}>В корзину</button>
        </div>
      </div>
    );
  }
};
