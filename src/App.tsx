import "./App.css";
import DisplayName from "./DisplayNames";
import babyArray from "./babyNameArray.json";
import SearchBar from "./SearchBar";
import { useState } from "react";
function App() {
  const [search, SetSearch] = useState("");
  const [favorite, setFavorite] = useState([]);
  const [filter, setFilter] = useState("all");

  const addToFavorite = (person) => {
    if (!favorite.includes(person)) {
      setFavorite([...favorite, person]);
    }
  };
  const removeFromFavorite = (person) => {
    setFavorite(favorite.filter((fav) => fav !== person));
  };
  const getBackgroundColor = (sex) => {
    return sex === "m" ? "lightblue" : "pink"; // Different colors for different genders
  };
  return (
    <>
      <div className="app-container">
        <h2>Sorted Names List</h2>
        <SearchBar
          search={search}
          setSearch={SetSearch}
          filter={filter}
          setFilter={setFilter}
        />
        <DisplayName
          people={babyArray}
          search={search}
          addToFavorite={addToFavorite}
          favorite={favorite}
          removeFromFavorite={removeFromFavorite}
          filter={filter}
        />

        <ul className="favorite-list">
          <h2>Favorite :</h2>
          {favorite.length === 0 ? (
            <p className="placeholder">
              Click some name below and add to your shortlist...
            </p>
          ) : (
            favorite.map((person, index) => (
              <span
                key={index}
                style={{ backgroundColor: getBackgroundColor(person.sex) }}
                className={person.gender === "m" ? "boy" : "girl"}
              >
                {person.name}
              </span>
            ))
          )}
        </ul>
      </div>
    </>
  );
}
export default App;
