import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from './RegisterForm.module.css';
import { logIn } from 'Redux/auth/operation';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Невірний формат email')
    .required("Обов'язкове поле"),
  password: Yup.string().required("Обов'язкове поле"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      try {
        dispatch(logIn(values));
        toast.success('Welcome!');
        formik.resetForm();
      } catch (error) {
        toast.error(' Please try again.');
      }
    },
  });

  return (
    <form
      className={css.form}
      onSubmit={formik.handleSubmit}
      autoComplete="off"
    >
      <label className={css.label}>
        Email
        <input
          className={css.field}
          type="email"
          name="email"
          placeholder="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className={css.error}>{formik.errors.email}</div>
        ) : null}
      </label>
      <label className={css.label}>
        Password
        <input
          className={css.field}
          type="password"
          name="password"
          placeholder="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className={css.error}>{formik.errors.password}</div>
        ) : null}
      </label>
      <button className={css.but} type="submit">
        Log In
      </button>
      <ToastContainer />
    </form>
  );
};
