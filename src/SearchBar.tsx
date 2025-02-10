function SearchBar(props) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search names..."
        className="search-bar"
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
      />
      <div className="filter-buttons">
        <button
          className={props.filter === "all" ? "active" : ""}
          onClick={() => props.setFilter("all")}
        >
          <img
            src="https://img.icons8.com/plasticine/100/gender-neutral-user-group.png"
            alt="All"
          />
        </button>
        <button
          className={props.filter === "m" ? "active" : ""}
          onClick={() => props.setFilter("m")}
        >
          <img src="https://img.icons8.com/doodle/48/boy.png" alt="Boys" />
        </button>
        <button
          className={props.filter === "f" ? "active" : ""}
          onClick={() => props.setFilter("f")}
        >
          <img src="https://img.icons8.com/doodle/48/girl.png" alt="Girls" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
