import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../../components/CartItem";
import style from "./cart.module.css";
import { EmptyCart } from "../../components/EmptyCart";
import { deleteFromCart } from "../../redux/slices/cartSlice";
import { CartPlacement } from "../../components/CartPlacement";

export const Cart = () => {
  const { token } = useAuth();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  
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
          })
            .then((res) => res.json())
            .then((data) => {
              return { _id: product._id, data };
            })
            )
      );

      return responce
      .filter((el) => {
        // проверка и удаление в случае, если товара с таким id не существует (был удален)
        if (el.value.data?.err) {
          dispatch(deleteFromCart(el.value._id));
        }
        
        // фильтруем rejected статусы и fullfiled, но с ошибкой
        return el.status !== "rejected" && !el.value.data.err;
      })
      .map((el) => el.value.data);
    },
    initialData: [],
  });

  
  if (cart.length) {
    return (
      <div className={style.wrapper}>
        <div className={style.cartHeader}>
          <h1 className={style.cartTitle}>Корзина</h1>
          <p className={style.cartProductsCount}>Количество {cart.length}</p>
        </div>
        <div className={style.block}>
          <div className={style.order}>
            {data.map((product) => (
              <CartItem key={product._id} product={product} />
            ))}
          </div>
          <div className={style.placement}>
            <CartPlacement data={data}/>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className={style.emptyCartContainer}>
        <EmptyCart />

      </div>
    </div>
  );
};
