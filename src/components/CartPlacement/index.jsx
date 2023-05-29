import { useSelector } from "react-redux";
import style from "./cartPlacement.module.css";

export const CartPlacement = ({ data }) => {
  const cart = useSelector((state) => state.cart);

  const itogo = (cart, data) => {
    let overAllCount = 0;
    let overAllprice = 0;
    for (let i = 0; i < cart.length; i++) {
      overAllCount = overAllCount + cart[i].count;
      if (data[i]?.price) {
        overAllprice =
          overAllprice +
          cart[i].count *
            Math.ceil(data[i].price * (1 - data[i].discount / 100));
      }
    }
    return { overAllCount, overAllprice };
  };
  let { overAllCount, overAllprice } = itogo(cart, data);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.wrapper}>
      <div className={style.conditions}>
        <p>Условия заказа</p>
      </div>
      <div className={style.summary}>
        <p className={style.itog}>Единиц товара: {overAllCount}</p>
        <p className={style.summ}>{overAllprice}p</p>
      </div>
      <div className={style.btn}>
        <button className={style.zakaz}>Оформить заказ</button>
      </div>
    </div>
  );
};
