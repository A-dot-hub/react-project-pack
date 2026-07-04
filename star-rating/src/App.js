import "./App.css";
import StarRating from "./components/starRating";

function App() {
  return (
    <div className="App">
      <StarRating noOfStars={10} />
    </div>
  );
}

export default App;
