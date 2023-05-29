import { Link } from "react-router-dom";
import style from "./noToken.module.css";

export const NoToken = () => {
  return (
    <div className={style.plug}>
      <div className={style.wrapper}>
        <p>
          Что то пошло не так. Пожалуйста <Link to="/signin">Войдите</Link> в
          аккаунт или <Link to="/signup">Зарегистрируйтесь</Link>
        </p>
      </div>
    </div>
  );
};
