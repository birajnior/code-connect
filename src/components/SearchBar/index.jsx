import style from "./search-bar.module.css";

export default function SearchBar() {
  return (
    <div className={`input-group mb-3 ${style.searchEstilizado}`}>
      <input
        className={`form-control ${style.searchIcon} ${style.searchInput}`}
        type="search"
        placeholder="Digite o que você procura"
        aria-label="Search"
      />
      <button
        className={`btn btn-outline-success ${style.btnEstilizado}`}
        type="submit"
      >
        Buscar
      </button>
    </div>
  );
}
