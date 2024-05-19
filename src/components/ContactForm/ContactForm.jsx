import css from './ContactForm.module.css'
import { nanoid } from 'nanoid'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

let schema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too Long')
    .required('Required'),
  number: Yup.string()
    .matches(/^[0-9+\-\(\)]{3,}$/, 'Invalid phone number')
    .required('Phone number is required'),
});

function ContactForm({ onAdd }) {
  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          values = { ...values, id: nanoid() }
          onAdd(values)
          actions.resetForm()
        }}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <div>
              <label htmlFor='name'>Name</label>
              <Field className={css.input} id='name' name='name' />
              {errors.name && touched.name ? (
                <p className={css.error}>{errors.name}</p>
              ) : null}
            </div>
            <div>
              <label htmlFor='number'>Number</label>
              <Field className={css.input} id='number' name='number' />
              {errors.number && touched.number ? (
                <p className={css.error}>{errors.number}</p>
              ) : null}
            </div>
            <button className={css.btn} type='submit'>
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ContactForm
