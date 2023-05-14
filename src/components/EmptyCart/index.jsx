import { Link } from "react-router-dom"
import style from "./emptyCart.module.css"

export const EmptyCart = () => {

  return (
    <div className={style.wrapper}>
      <p>Опаньки... Ваша корзина пуста</p>
      <button><Link to="/products">В каталог</Link></button>
    </div>
  )
}