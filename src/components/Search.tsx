import { ChangeEvent, FormEvent, useState, useRef } from 'react'

type SearchProps = {
  search: Function
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

    search(searchRef.current?.value.trim())
  }

  function resetFieldError(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.trim() !== '') {
      setError('')
    }
  }

  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for any word..."
        ref={searchRef}
        onChange={resetFieldError}
        className={error ? `error` : ``}
      />
      {error && <p className="error">{error}</p>}
    </form>
  )
}

export default Search
