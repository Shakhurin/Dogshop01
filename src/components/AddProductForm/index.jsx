import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./addProductForm.module.css";
import { useMutation } from "@tanstack/react-query";
import { fetchNewProduct } from "../../api/products";

export const AddProductForm = ({token, closeModal}) => {
  const initialValues = {
    name: "",
    description: "",
    pictures: "",
    discount: 0,
    stock: 0,
    wight: "",
    tags: [],
  };

  const { mutate } = useMutation({
    mutationFn: async (values) => {
      const res = await fetchNewProduct(token, values);
      console.log(`Рес: ${res}`);
      if(res.ok){
        console.log("Успешно создан");

        return closeModal()
      }

      return res.error;
    },
  });

  const onSubmit = async (values) => {
    mutate(values)
    
    return closeModal()
  };

  const SignInSchema = Yup.object().shape({
    name: Yup.string().required("Обязательно"),
    description: Yup.string().min(0).required("Обязательно"),
    price: Yup.number().required("Обязательно"),
    pictures: Yup.string().url().required("Обязательно"),
    discount: Yup.number().required("Обязательно"),
    stock: Yup.number().required("Обязательно"),
    wight: Yup.string().required("Обязательно"),
  });

  return (
    <div className={style.signInWindow}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SignInSchema}
      >
        <Form>
          <div className={style.signInInformation}>
            <Field 
              name="name" 
              placeholder="Название товара" 
              type="text" 
            />
            <ErrorMessage name="name" component="p" className={style.error} />
          </div>

          <div className={style.signInInformation}>
            <Field 
              name="description" 
              placeholder="Описание товара" 
              type="text" 
            />
            <ErrorMessage name="description" component="p" className={style.error} />
          </div>

          <div className={style.signInInformation}>
            <Field 
              name="pictures" 
              placeholder="Фото товара" 
              type="text" 
            />
            <ErrorMessage name="pictures" component="p" className={style.error} />
          </div>

          <div className={style.signInInformation}>
            <Field 
              name="wight" 
              placeholder="Размеры товара" 
              type="text" 
            />
            <ErrorMessage name="wight" component="p" className={style.error} />
          </div>

          <div className={style.signInInformation}>
            <Field 
              name="price" 
              placeholder="Цена товара" 
              type="number" 
            />
            <ErrorMessage name="price" component="p" className={style.error} />
          </div>

          <div className={style.signInInformation}>
            <Field 
              name="discount" 
              placeholder="Скидка на товар" 
              type="number" 
            />
            <ErrorMessage name="discount" component="p" className={style.error} />
          </div>

          <div className={style.signInInformation}>
            <Field 
              name="stock" 
              placeholder="Количество товара" 
              type="number" 
            />
            <ErrorMessage name="stock" component="p" className={style.error} />
          </div>

          <button type="submit">Создать</button>
        </Form>
      </Formik>
    </div>
  );
};
