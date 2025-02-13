import "./App.css";
import DisplayName from "./DisplayNames";
import babyArray from "./babyNameArray.json";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
// Define TypeScript type for a baby name
interface BabyName {
  id: number;
  name: string;
  sex: "m" | "f"; // Only "m" or "f"
}
function App() {
  const [search, SetSearch] = useState<string>("");
  const [favorite, setFavorite] = useState<BabyName[]>([]);
  const [filter, setFilter] = useState<"all" | "m" | "f">("all");
  const [darkMode, setDarkMode] = useState(false);
  const babyArrayy: BabyName[] = babyArray as BabyName[];
  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";
  }, [darkMode]);
  const addToFavorite = (person: BabyName) => {
    if (!favorite.includes(person)) {
      setFavorite([...favorite, person]);
    }
  };
  const removeFromFavorite = (person: BabyName) => {
    setFavorite(favorite.filter((fav) => fav !== person));
  };
  const getBackgroundColor = (sex: "m" | "f") => {
    return sex === "m" ? "lightblue" : "pink"; // Different colors for different genders
  };
  return (
    <>
      <div className="app-container">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <h2>Sorted Names List</h2>
        <SearchBar
          search={search}
          setSearch={SetSearch}
          filter={filter}
          setFilter={setFilter}
        />
        <DisplayName
          people={babyArrayy}
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
                className={person.sex === "m" ? "boy" : "girl"}
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
