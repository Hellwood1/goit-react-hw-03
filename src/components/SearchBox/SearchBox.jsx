import css from './SearchBox.module.css'

function SearchBox({ onFilter }) {
  return (
    <div className={css.search}>
      <label htmlFor='search-contact'>Find contacts by name</label>
      <input
        className={css.input}
        id='search-contact'
        onChange={e => {
          const value = e.target.value.toLowerCase()
          onFilter(value)
        }}
      />
    </div>
  )
}

export default SearchBox
