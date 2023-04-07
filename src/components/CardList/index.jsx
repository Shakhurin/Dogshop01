import { useEffect, useState } from "react"
import { CardItem } from "../CardItem"
import style from './cardList.module.css'


export const CardList = () => {

  const [products, setProducts] = useState([])

  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwN2UwOWFhMzk3MTIxODM4ZjI5MjQiLCJncm91cCI6Imdyb3VwLTExIiwiaWF0IjoxNjc4ODAyNDQ5LCJleHAiOjE3MTAzMzg0NDl9.GWN3Gfo58rW5GogskTLpRDu6bJTL2H0Vs6JThTJf_5Y
  useEffect(() => {
    const fetchDataProducts = async () => {
      const res = await fetch('https://api.react-learning.ru/products', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token_auth")}`
        }
      })

      // if(res.ok)

      const responce = await res.json()
      console.log(responce)
      setProducts(responce.products)
    }

    fetchDataProducts()
  }, [])

  return (
    <div className={style.cardsBlock}>
      {products.map((product, index) => {
        return (<CardItem key={index} product={product} />)
      })}

    </div>
  )
}