import { Link, useNavigate } from 'react-router-dom'
import style from './header.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { cleanUser } from '../../redux/slices/userSlice'
import { Search } from '../../components/Search'
import { Modal } from '../../components/Modal'
import { useState } from 'react'
import { AddProductForm } from '../../components/AddProductForm'

export const Header = () => {

  const {token} = useSelector(state => state.user)
  const [addProductModal, setAddProductModal] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector(state => state.cart)
  const favourite = useSelector(state => state.favourites)


  const handleExit = () => {
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
          {token ? <div> <Link to='cart'>Корзина {!!cart.length && `(${cart.length})`}</Link></div> : ''}
          {token ? <div> <Link to='favourites'>Избранное {!!favourite.length && `(${favourite.length})`}</Link></div> : ''}
          {token ? <div onClick={handleExit}> <Link to='signin'>Выйти</Link></div>  && <button onClick={() => setAddProductModal(true)}>Добавить товар</button>: ''}
        </div>
        <Modal isOpen={addProductModal} closeModal={() => setAddProductModal(false)} >
          <AddProductForm token={token} closeModal={() => setAddProductModal(false)}/>
        </Modal>
      </div>
    </>
  )
}