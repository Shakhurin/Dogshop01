import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import style from './style.module.css'

export const Layout = () => {
  return (
    <div className={style.wrapper}>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
