import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { EmptyFavourites } from "../../components/EmptyFavourites";
import style from "./favourite.module.css";
import { FavouritesItem } from "../../components/FavouritesItem";
import { deleteFromFavourites } from "../../redux/slices/favouritesSlice";

export const Favourites = () => {
  const { token } = useAuth();
  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch()

  const { data } = useQuery({
    queryKey: ["getFavouritesProducts", favourites.length],
    queryFn: async () => {
      const responce = await Promise.allSettled(
        favourites.map((_id) =>
          fetch(`https://api.react-learning.ru/products/${_id}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((res) => res.json()).then(data=>{
            return { _id, data }
          })
        )
      );

      return responce.filter(el => {

        // проверка и удаление в случае, если товара с таким id не существует (был удален)
        if (el.value.data?.err) {
          dispatch(deleteFromFavourites(el.value._id))
        }

        // фильтруем rejected статусы и fullfiled, но с ошибкой
        return el.status !== 'rejected' && !el.value.data.err
      }).map(el => el.value.data);
    },
    initialData: [],
  });


  if(favourites.length){
    return <>
        <div className={style.cartHeader}>
          <h1 className={style.cartTitle}>Избранное</h1>
          <p className={style.cartProductsCount}>Количество {favourites.length}</p>
        </div>
        {data.map((product) => (
          <FavouritesItem key={product._id} product={product} />
        ))}
      </>
  }

  return(
    <div className={style.plug}>
      <EmptyFavourites />
    </div>
  )
}