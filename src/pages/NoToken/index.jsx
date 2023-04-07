import { Link } from "react-router-dom";

export const NoToken = () => {
  return (
    <div>
      Что то пошло не так. Пожалуйста <Link to="/signin">Войдите</Link> в
      аккаунт или <Link to="/signup">Зарегистрируйтесь</Link>
    </div>
  );
};
