type SearchProps = {
  error?: string
}

function Search({ error }: SearchProps) {
  return (
    <form className="Search">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for any word..."
        className={error ? `error` : ``}
      />
      {error && <p className="error">{error}</p>}
    </form>
  )
}

export default Search
