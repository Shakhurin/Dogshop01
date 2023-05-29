import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setUpUser } from "../../redux/slices/userSlice";
import { signInFetch } from "../../api/user";
import { useNoAuth } from "../../hooks/useNoAuth";

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useNoAuth();

  const [error, setError] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const { mutateAsync: signInMutation } = useMutation({
    mutationFn: async (values) => {
      const res = await signInFetch(values);
      return res;
    },
  });

  const onSubmit = async (values) => {
    const res = await signInMutation(values);
    const responce = await res.json();

    if (res.ok) {
      dispatch(setUpUser({ token: responce.token, ...responce.data }));
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
        <div className={style.wrapper}>
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
      </div>
    </>
  );
};
