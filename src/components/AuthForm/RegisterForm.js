import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'Redux/auth/operation';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from './RegisterForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Обов'язкове поле")
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇєЄ']+(([' -][a-zA-Zа-яА-ЯіІїЇєЄ' ])?[a-zA-Zа-яА-ЯіІїЇєЄ']*)*$/,
      'Неправильний формат імені'
    )
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇєЄ\s']+(([' -][a-zA-Zа-яА-ЯіІїЇєЄ\s']*)?[a-zA-Zа-яА-ЯіІїЇєЄ\s']*)*$/,
      'Invalid name format'
    ),
  email: Yup.string()
    .email('Невірний формат email')
    .required("Обов'язкове поле"),
  password: Yup.string().required("Обов'язкове поле"),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(register(values));
      formik.resetForm();
      toast.success('Registration successful!');
    },
  });

  return (
    <form
      className={css.form}
      onSubmit={formik.handleSubmit}
      autoComplete="off"
    >
      <label className={css.label}>
        Username
        <input
          className={css.field}
          type="text"
          name="name"
          placeholder="Rosie Simpson"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={css.error}>{formik.errors.name}</div>
        ) : null}
      </label>
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
        Register
      </button>
      <ToastContainer />
    </form>
  );
};
