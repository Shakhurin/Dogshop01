import { CardItem } from "../CardItem"
import style from './cardList.module.css'
import { useQuery } from "@tanstack/react-query"


export const CardList = () => {

  const { data:productsObject } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const res = await fetch('https://api.react-learning.ru/products', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token_auth")}`
        }
      })

      const responce = await res.json()
      return responce
    }
  })

  if(productsObject){
    return (
    <div className={style.cardsBlock}>
      {productsObject.products.map((product, index) => {
        return (<CardItem key={index} product={product} />)
      })}
    </div>
  )
}
}