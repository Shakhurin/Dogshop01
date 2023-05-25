import { useDispatch } from "react-redux";
import style from "./favouritesItem.module.css";
import { changeFavourites } from "../../redux/slices/favouritesSlice";

export const FavouritesItem = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <div className={style.card}>
      <div>
        <img src={product.pictures} alt="" />
      </div>
      <div>
        <p>{product.name}</p>
      </div>
      <div>
        <button onClick={()=> dispatch(changeFavourites(product._id))}>Удалить</button>
      </div>
    </div>
  );
};
