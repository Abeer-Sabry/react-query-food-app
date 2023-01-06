import { useState } from "react";
import "./App.css";
// components
import Select from "./components/Select/Select";
import Recipes from "./components/Recipes/Recipes";
import Brush from "./assets/Shape-3.png";

function App() {
  const [page, setPage] = useState(0);
  const [number, setNumber] = useState(15);

  const changeHandler = e => {
    setPage(0);
    setNumber(e.target.value);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>choose your favorite</h1>
        <img src={Brush} alt="" />
        <div className="selectDiv">
          <Select arr={[15, 25, 50, 100]} onChange={changeHandler} />
        </div>
      </div>
      <Recipes page={page} setPage={setPage} number={number} />
    </div>
  );
}

export default App;
