import { ChangeEvent, FormEvent, useState, useRef } from 'react'
import searchIcon from '../assets/search.svg'
import { SearchFn } from '../App'

type SearchProps = {
  search: SearchFn
}

function Search({ search }: SearchProps) {
  const [error, setError] = useState<string>()
  const searchRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (searchRef.current?.value.trim() === '') {
      setError('Whoops, can’t be empty...')
    } else {
      setError('')
    }

    search(searchRef.current?.value.trim() || '')
  }

  function resetFieldError(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.trim() !== '') {
      setError('')
    }
  }

  return (
    <form className="Search" onSubmit={handleSubmit}>
      <div className="Search__wrapper">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for any word..."
          ref={searchRef}
          onChange={resetFieldError}
          className={error ? `error` : ``}
        />
        <img src={searchIcon} className="Search__icon" alt="Search icon" />
      </div>
      {error && <p className="error">{error}</p>}
    </form>
  )
}

export default Search
