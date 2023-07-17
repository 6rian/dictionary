import { ChangeEvent, FormEvent, useState, useRef, useContext } from 'react'
import searchIcon from '../assets/search.svg'
import { SearchFn } from '../App'
import { AppContext } from '../state/context'
import { setSearchTerm } from '../state/actions'

type SearchProps = {
  search: SearchFn
  searchTerm: string | undefined
}

function Search({ search, searchTerm }: SearchProps) {
  const { dispatch } = useContext(AppContext)

  const [error, setError] = useState<string>()
  const searchRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const searchTerm = searchRef.current?.value.trim()

    if (searchTerm === '') {
      setError('Whoops, can’t be empty...')
    } else {
      setError('')
    }

    dispatch(setSearchTerm(searchTerm || ''))
    search(searchTerm || '')
  }

  function resetFieldError(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setSearchTerm(e.target.value.trim()))
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
          value={searchTerm}
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
