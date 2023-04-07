import style from './footer.module.css'

export const Footer = () => {


  return (
    <footer className={style.wrapper}>
      <div className={style.logoAndSmth}>
        Лого
        <p className={style.copyright}>© «Интернет-магазин DogFood.ru»</p>
      </div>
      <div className={style.faq}>
        <p>Каталог</p>
        <p>Акции</p>
        <p>Новости</p>
        <p>Отзывы</p>
      </div>
      <div className={style.faq}>
        <p>Оплата и доставка</p>
        <p>Часто спрашивают</p>
        <p>Обратная связь</p>
        <p>Контакты</p>
      </div>
      <div className={style.contacts}>
        <div id={style.footerConnect}>
          <h4 id={style.onPhone}>Мы на связи</h4>
          <h4 className={style.hidden} id={style.alwaysOnPhone}>Мы всегда на связи</h4>
          <h4 id={style.phoneNumber}>8 (999) 00-00-00</h4>
          <p id={style.gmail}>dogfood@gmail.com</p>
          <p className={style.copyright} id={style.hidden}>© «Интернет-магазин DogFood.ru»</p>
        </div>
        <div>
          <img src="../../assets/footerSVG/instagram-svg" alt="" />
        </div>
      </div>
    </footer>
  )
}

