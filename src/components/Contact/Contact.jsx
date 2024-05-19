import css from './Contact.module.css'
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs'

function Contact({ id, name, number, onDelete }) {
  return (
    <div className={css.card}>
      <div className={css.contact}>
        <div className={css.container}>
          <BsFillPersonFill size={18} />
          <p>{name}</p>
        </div>
        <div>
          <BsFillTelephoneFill size={18} />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={css.delete}
        type='button'
        onClick={() => {
          onDelete(id)
        }}
      >
        Delete
      </button>
    </div>
  )
}

export default Contact
