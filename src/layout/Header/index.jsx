import { Link, useNavigate } from 'react-router-dom'
import style from './header.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { cleanUser } from '../../redux/slices/userSlice'
import { Search } from '../../components/Search'

export const Header = () => {

  const {token} = useSelector(state => state.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onClick = () => {
    dispatch(cleanUser())
    return navigate('/signin')
  } 

  return (
    <>
      <div className={style.header}>
        <div className={style.wrapper}>
          <div >{token ? <Link to='products'>Домой</Link> : <Link to='oops'>Домой</Link>}</div>
          <div className={style.searchBarDiv}>
            <Search/>
          </div>
          {!token ? <div><Link to="signin">Войти</Link></div> : <div><Link to='user'>Личный кабинет</Link></div>}
          {!token ? <div><Link to="signup">Зарегистрироваться</Link></div> : ""}
          {token ? <div onClick={onClick}> <Link to='signin'>Выйти</Link></div> : ''}
        </div>
      </div>
    </>
  )
}