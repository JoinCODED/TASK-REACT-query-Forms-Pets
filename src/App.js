import { useState } from "react";
import "./App.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap-5.0.0-beta2.min.css";
import "./assets/css/LineIcons.2.0.css";
import "./assets/css/main.css";
import "./assets/css/tiny-slider.css";
import PetsList from "./Components/PetsList";
import petsData from "./petsData";

function App() {
  const [pets, setPets] = useState(petsData);
  return (
    <div className="App">
      <PetsList _pets={pets} />
    </div>
  );
}

export default App;
