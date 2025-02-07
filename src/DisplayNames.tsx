import propTypes from "./prop-types";
import "./App.css";
function DisplayName(props) {
  const allNames = props.people.map((person) => ({
    name: person.name,
    sex: person.sex,
  }));
  const sortedName = [...allNames].sort((a, b) => a.name.localeCompare(b.name));
  const getBackgroundColor = (sex) => {
    return sex === "m" ? "lightblue" : "pink"; // Different colors for different genders
  };
  return (
    <>
      {sortedName.map((person, index) => (
        <p
          key={index}
          style={{ backgroundColor: getBackgroundColor(person.sex) }}
          className={person.gender === "m" ? "boy" : "girl"}
        >
          {person.name}
        </p>
      ))}
    </>
  );
}
export default DisplayName;
