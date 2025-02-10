import "./App.css";
function DisplayName(props) {
  const filteredNames = props.people.filter((person) =>
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
  const getBackgroundColor = (sex) => {
    return sex === "m" ? "lightblue" : "pink"; // Different colors for different genders
  };

  const isFavorite = (person) => {
    return props.favorite.some((fav) => fav.name === person.name);
  };
  const handelClick = (person) => {
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
          className={person.gender === "m" ? "boy" : "girl"}
          onClick={() => handelClick(person)}
        >
          {person.name}
        </p>
      ))}
    </>
  );
}
export default DisplayName;
