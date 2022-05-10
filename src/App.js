import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import IslandForm from "./Components/IslandForm";
import IslandList from "./Components/IslandList";
import data from "./data/islands";

function App() {
  const [island, setIsland] = useState({
    name: "Boubyan",
    img: "http://photos.wikimapia.org/p/00/02/20/48/92_big.jpg",
  });
  const [islands, setIslands] = useState(data);
  const incrementVisitors = (island) => {
    island.visitors++;
    setIslands([islands]);
  };
  return (
    <div>
      <Header />

      <div className="homePage">
        <IslandList setIsland={setIsland} />
        <IslandForm island={island} incrementVisitors={incrementVisitors} />
      </div>
    </div>
  );
}

export default App;
