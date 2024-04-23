import css from './SearchBar.module.css'

export default function SearchForm ({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const findImage = form.elements.search.value;
    onSearch(findImage);
    form.reset();
  };

  return (
    <header className={css.container}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        
      </form>
    </header>
  );
}
