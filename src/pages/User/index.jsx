import { useEffect, useState } from "react";
import style from "./style.module.css"

export const User = () => {

  const [info, setInfo] = useState({})

  useEffect (() => {
    const fetchUserInformation = async () => {
      const res = await fetch("https://api.react-learning.ru/v2/group-11/users/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token_auth')}`
        }
      })

      // if(res.ok)

      const responce = await res.json()
      setInfo(responce)
    }
    fetchUserInformation()
  }, [])
  

  return (
    <>
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
    </>
  );
};
