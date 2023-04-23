import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./style.module.css";
import { signInFetch } from "../../api/signIn";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SignIn = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    const res = await signInFetch(values);
    const responce = await res.json();
    // console.log(response)

    if (res.ok) {
      localStorage.setItem("token_auth", responce.token);
      return navigate("/products");
    }

    return setError(responce.message);
  };

  const SignInSchema = Yup.object().shape({
    password: Yup.string().required("Обязательно"),
    email: Yup.string().email("Некорректный email").required("Обязательно"),
  });

  return (
    <>
      <div className={style.signInWindow}>
        <h1>SignIn</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={SignInSchema}
        >
          <Form>
            <div className={style.signInInformation}>
              <Field name="email" placeholder="jane@acme.com*" type="email" />
              <ErrorMessage
                name="email"
                component="p"
                className={style.error}
              />
            </div>

            <div className={style.signInInformation}>
              <Field name="password" placeholder="Пароль*" type="password" />
              <ErrorMessage
                name="password"
                component="p"
                className={style.error}
              />
            </div>

            <button type="submit">Подтвердить</button>
            {error && <p className={style.error}>{error}</p>}
          </Form>
        </Formik>
      </div>
    </>
  );
};
