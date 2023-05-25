import style from "./footer.module.css";
import instagram from "../../assets/footerSVG/instagram-svg.svg";
import telegram from "../../assets/footerSVG/telegram-svg.svg";
import viber from "../../assets/footerSVG/viber-svg.svg";
import vk from "../../assets/footerSVG/vk-with-circle-svg.svg";
import whatsapp from "../../assets/footerSVG/whatsapp-128-svg.svg";

export const Footer = () => {
  const firstFaqArray = ["Каталог", "Акции", "Новости", "Отзывы"];
  const secondFaqArray = [
    "Оплата и доставка",
    "Часто спрашивают",
    "Обратная связь",
    "Контакты",
  ];

  return (
    <footer className={style.wrapper}>
      <div className={style.logoAndSmth}>
        Лого
        <p className={style.copyright}>© «Интернет-магазин DogFood.ru»</p>
      </div>
      <div className={style.faq}>
        {firstFaqArray.map((el, index) => (
          <p key={index}>{el}</p>
        ))}
      </div>
      <div className={style.faq}>
        {secondFaqArray.map((el, index) => (
          <p key={index}>{el}</p>
        ))}
      </div>
      <div className={style.contacts}>
        <div id={style.footerConnect}>
          <h4 id={style.onPhone}>Мы на связи</h4>
          <h4 className={style.hidden} id={style.alwaysOnPhone}>
            Мы всегда на связи
          </h4>
          <h4 id={style.phoneNumber}>8 (999) 00-00-00</h4>
          <p id={style.gmail}>dogfood@gmail.com</p>
          <p className={style.copyright} id={style.hidden}>
            © «Интернет-магазин DogFood.ru»
          </p>
        </div>
        <div>
          {/* <img src={instagram} alt="instagram" className={style.iqon}/>
          <img src={telegram} alt="instagram" className={style.iqon}/>
          <img src={viber} alt="instagram" className={style.iqon}/>
          <img src={whatsapp} alt="instagram" className={style.iqon}/>
          <img src={vk} alt="instagram" className={style.iqon}/> */}
        </div>
      </div>
    </footer>
  );
};
