import { Link } from "react-router-dom"
import style from "../EmptyFavourites/emptyFavourites.module.css"

export const EmptyFavourites = () => {

  return (
    <div className={style.wrapper}>
      <p>Опаньки... Нет избранных товаров</p>
      <button><Link to="/products">В каталог</Link></button>
    </div>
  )
}