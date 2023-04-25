import style from "./style.module.css"
import { useQuery } from "@tanstack/react-query";

export const User = () => {

  const {data:info} = useQuery({
    queryKey:["userData"],
    queryFn: async () => {
      const res = await fetch("https://api.react-learning.ru/v2/group-11/users/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token_auth')}`
        }
      })

      const responce = await res.json()
      return responce
    }
  })
  
  
  if(info) {
    return (
    <div className={style.wrapper}>
        <img src={info.avatar} alt="Моя аватарка" />
      <div className={style.info}>
        Блок с описанием пользователя
        <div>Имя: {info.name}</div>
        <div>Обо мне: {info.about}</div>
        <div>Группа: {info.group}</div>
        <div>email: {info.email}</div>
      </div>
    </div>
    );
  }
};
