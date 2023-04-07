import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./style.module.css";

export const AboutProduct = () => {
  const { idOfProduct } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchDataProduct = async () => {
      const res = await fetch(
        `https://api.react-learning.ru/products/${idOfProduct}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token_auth")}`,
          },
        }
      );
      const responce = await res.json();
      console.log(responce);
      setProduct(responce);
    };
    fetchDataProduct();
  }, [idOfProduct]);

  return (
    <>
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
      </div>
    </>
  );
};
