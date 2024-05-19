import css from './App.module.css'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import { useState, useEffect } from 'react'

const getInitialContacts = () => {
  return JSON.parse(localStorage.getItem('contacts'))
    ? JSON.parse(localStorage.getItem('contacts'))
    : []
}

function App() {
  const [contacts, setContacts] = useState(() => getInitialContacts())
  const [filter, setFilter] = useState('')

  const saveContactList = list => {
    localStorage.setItem('contacts', JSON.stringify(list))
  }

  const addContact = object => {
    setContacts(prevContacts => {
      return [...prevContacts, object]
    })
  }

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(el => el.id !== contactId)
    })
  }

  const filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter)
  )

  useEffect(() => {
    saveContactList(contacts)
  }, [contacts])

  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox onFilter={setFilter} />
        <ContactList contacts={filteredContacts} onDelete={deleteContact} />
      </div>
    </>
  )
}

export default App
