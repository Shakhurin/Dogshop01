import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./style.module.css";
import { useState } from "react";
import { signUpFetch } from "../../api/signup";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {

  const navigate = useNavigate()

  const [error, setError] = useState(false);

  const initialValues = {
    email: "",
    password: "",
    group: "",
  };

  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email("Неправильный email").required("Обязательно"),
    password: Yup.string()
      .min(6, "Слишком короткий!")
      .max(70, "Слишком длинный!")
      .required("Обязательно"),
    group: Yup.string().required("Обязательно"),
  });

  const onSubmit = async (values) => {
    const res = await signUpFetch(values);
    const responce = await res.json();

    if(res.ok){
      localStorage.setItem('token_auth', responce.token)
      return navigate('/products')
    }

    return setError(responce.message)
  };

  return (
    <>
      <h1>SignUP</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SignUpSchema}
      >
        <Form>
          <div>
            <Field name="email" placeholder="jane@acme.com*" type="email" />
            <ErrorMessage name="email" component="p" className={style.error} />
          </div>

          <div>
            <Field name="password" placeholder="Пароль*" type="password" />
            <ErrorMessage
              name="password"
              component="p"
              className={style.error}
            />
          </div>

          <div>
            <Field name="group" placeholder="Группа*" />
            <ErrorMessage name="group" component="p" className={style.error} />
          </div>

          <button type="submit">Подтвердить</button>
          {error && <p className={style.error}>{error}</p>}
        </Form>
      </Formik>
    </>
  );
};
