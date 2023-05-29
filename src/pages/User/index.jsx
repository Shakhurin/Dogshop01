import { useSelector } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import style from "./style.module.css";
import { Modal } from "../../components/Modal";
import { AddProductForm } from "../../components/AddProductForm";
import { useState } from "react";

export const User = () => {
  useAuth();
  const info = useSelector((state) => state.user);
  const [addProductModal, setAddProductModal] = useState(false);

  if (info) {
    return (
      <div className={style.wrapper}>
        <div className={style.frame}>
          <img src={info.avatar} alt="Моя аватарка" />
          <div className={style.info}>
            Блок с описанием пользователя
            <div>Имя: {info.name}</div>
            <div>Обо мне: {info.about}</div>
            <div>Группа: {info.group}</div>
            <div>email: {info.email}</div>
          </div>
        </div>
        <div className={style.modalDiv}>
          <button
            className={style.modalPortal}
            onClick={() => setAddProductModal(true)}
          >
            Добавить товар
          </button>
        </div>
        <Modal isOpen={addProductModal} closeModal={() => setAddProductModal(false)} >
          <AddProductForm token={info.token} closeModal={() => setAddProductModal(false)}/>
        </Modal>
      </div>
    );
  }
};
