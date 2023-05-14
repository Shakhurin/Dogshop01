import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../hooks/useAuth";
import { useSelector } from "react-redux";
import { CartItem } from "../../components/CartItem";
import style from "./cart.module.css";
import { EmptyCart } from "../../components/EmptyCart";

export const Cart = () => {
  const { token } = useAuth();
  const cart = useSelector((state) => state.cart);

  const { data } = useQuery({
    queryKey: ["getCartProducts", cart.length],
    queryFn: async () => {
      const responce = await Promise.allSettled(
        cart.map((product) =>
          fetch(`https://api.react-learning.ru/products/${product._id}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((res) => res.json())
        )
      );

      return responce
        .filter((el) => el.status !== "rejected")
        .map((el) => el.value);
    },
    initialData: [],
  });

  if(cart.length){
    return (
      <>
        <div className={style.cartHeader}>
          <h1 className={style.cartTitle}>Корзина</h1>
          <p className={style.cartProductsCount}>Количество {cart.length}</p>
        </div>
        {data.map((product) => (
          <CartItem key={product._id} product={product} />
        ))}
      </>
    );
  }
  return(
    <EmptyCart />
  )

};
