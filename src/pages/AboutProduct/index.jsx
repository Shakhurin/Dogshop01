import { useParams } from "react-router-dom";
import style from "./style.module.css";
import { useQuery } from "@tanstack/react-query";

export const AboutProduct = () => {
  const { idOfProduct } = useParams();


  const {data:product} = useQuery({
    queryKey:['productInfo', idOfProduct],
    queryFn: async () => {
      const res = await fetch(
        `https://api.react-learning.ru/products/${idOfProduct}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token_auth")}`,
          },
        }
      );
      const responce = await res.json();

      return responce
    }
  })


  // useEffect(() => {
  //   const fetchDataProduct = async () => {
  //     const res = await fetch(
  //       `https://api.react-learning.ru/products/${idOfProduct}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token_auth")}`,
  //         },
  //       }
  //     );
  //     const responce = await res.json();
  //     console.log(responce);
  //     setProduct(responce);
  //   };
  //   fetchDataProduct();
  // }, [idOfProduct]);

  if(product) {
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
      </div>
  );
}}
