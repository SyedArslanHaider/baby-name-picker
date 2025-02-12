import "./App.css";
interface BabyName {
  id: number;
  name: string;
  sex: "m" | "f";
}
interface DisplayNameProps {
  people: BabyName[];
  search: string;
  favorite: BabyName[];
  addToFavorite: (person: BabyName) => void;
  removeFromFavorite: (person: BabyName) => void;
  filter: "all" | "m" | "f";
}
function DisplayName(props: DisplayNameProps) {
  const filteredNames = props.people.filter((person: BabyName) =>
    person.name.toLowerCase().includes(props.search.toLowerCase())
  );
  // const allNames = filteredNames.map((person) => ({
  //   name: person.name,
  //   sex: person.sex,
  // }));

  const genderFilteredNames = filteredNames.filter(
    (person) => props.filter === "all" || person.sex === props.filter
  );

  const sortedName = [...genderFilteredNames].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const getBackgroundColor = (sex: "m" | "f") => {
    return sex === "m" ? "lightblue" : "pink"; // Different colors for different genders
  };

  const isFavorite = (person: BabyName) => {
    return props.favorite.some((fav) => fav.name === person.name);
  };
  const handelClick = (person: BabyName) => {
    if (isFavorite(person)) {
      props.removeFromFavorite(person);
    } else {
      props.addToFavorite(person);
    }
  };
  return (
    <>
      {sortedName.map((person, index) => (
        <p
          key={index}
          style={{ backgroundColor: getBackgroundColor(person.sex) }}
          className={person.sex === "m" ? "boy" : "girl"}
          onClick={() => handelClick(person)}
        >
          {person.name}
        </p>
      ))}
    </>
  );
}
export default DisplayName;
