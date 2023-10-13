import css from './ContactForm.module.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'Redux/Contacts/selectors';
import { addContact } from 'Redux/Contacts/operation';

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
  number: Yup.string()
    .required('Phone is required')
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Invalid phone number'
    ),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { name, number, id } = values;

    const newContact = {
      id,
      name,
      number,
    };
    const isContactExists = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );
    if (isContactExists) {
      toast.warning('Контакт з таким імям або номером телефону вже існує.');
    } else {
      toast.success('Операція завершилася успішно');
      dispatch(addContact(newContact));
      resetForm();
    }
  };
  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.container}>
            <div className={css.form_wrap}>
              <label className={css.label} htmlFor="name">
                Name
              </label>
              <Field
                className={css.field}
                type="text"
                id="name"
                name="name"
                placeholder="Rosie Simpson"
              />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label className={css.label} htmlFor="number">
                Phone
              </label>
              <Field
                className={css.field}
                type="text"
                id="number"
                name="number"
                placeholder="459-12-56"
              />
              <ErrorMessage name="number" component="div" />
            </div>
          </div>
          <button className={css.button} type="submit">
            ☎️ Add contact
          </button>
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
};
