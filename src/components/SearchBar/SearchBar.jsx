import css from './SearchBar.module.css'
import toast, { Toaster } from "react-hot-toast";

export default function SearchForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = form.elements.search.value;
    if (data.trim() === "") {
      toast.error("Please, enter your request!");
      return;
    }
    onSubmit(data.trim());
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
        <Toaster />
      </form>
    </header>
  );
}
