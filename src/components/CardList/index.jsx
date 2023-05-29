import { useSelector } from "react-redux";
import { productsFetch } from "../../api/products";
import { CardItem } from "../CardItem";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../hooks/useAuth";
import style from "./cardList.module.css";
import { useState, useEffect } from "react";
import { sortingData } from "../../utils/sortingData";

export const CardList = ({ sortingValue }) => {
  const search = useSelector((state) => state.filter.search);
  const { token } = useAuth();
  const [productOrderedList, setProductOrderedList] = useState([]);

  const {
    data: productsObj,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["allProducts", search],
    queryFn: async (search) => {
      const res = await productsFetch(token, search);
      const response = await res.json();

      return response;
    },
  });


  useEffect(() => {
    if (productsObj?.products) {
      //? для проверки наличия объекта productsObj
      setProductOrderedList(
        productsObj.products.filter((el) => el.name.includes(search))
      );
    }
  }, [search, productsObj]);

  if (isError) return <p>Произошла ошибка: {error}</p>;

  if (isLoading) return <p>Загрузка...</p>;

  return (
    <div className={style.cardsBlock}>
      {sortingData(productOrderedList, sortingValue).map((product, index) => {
        return <CardItem key={index} product={product} />;
      })}
    </div>
  );
};
