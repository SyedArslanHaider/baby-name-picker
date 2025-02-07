import "./App.css";
import DisplayName from "./DisplayNames";
import babyArray from "./babyNameArray.json";
function App() {
  return (
    <>
      <h2>Sorted Names List</h2>
      <DisplayName people={babyArray} />
    </>
  );
}
export default App;
