import { Link } from 'react-router-dom'
import style from './header.module.css'

export const Header = () => {

  const onClick = () => {
    localStorage.removeItem('token_auth')
  } 

  return (
    <>
      <div className={style.header}>
        <div className={style.wrapper}>
          <div >{localStorage.getItem("token_auth") ? <Link to='products'>Домой</Link> : <Link to='oops'>Домой</Link>}</div>
          <div className={style.searchBarDiv}>
            <input placeholder='Поиск по сайту' type="text" />
          </div>
          {!localStorage.getItem("token_auth") ? <div><Link to="signin">Войти</Link></div> : <div><Link to='user'>Личный кабинет</Link></div>}
          {!localStorage.getItem("token_auth") ? <div><Link to="signup">Зарегистрироваться</Link></div> : ""}
          {localStorage.getItem("token_auth") ? <div onClick={onClick}> <Link to='signin'>Выйти</Link></div> : ''}
          <div></div>
        </div>
      </div>
    </>
  )
}