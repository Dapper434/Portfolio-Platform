function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="search-wrapper">
      <label htmlFor="search-projects" className="sr-only">
        Search projects
      </label>
      <input
        id="search-projects"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}

export default SearchBar
