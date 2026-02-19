import React from "react";
import { Card } from "./Card";
import { cats } from "./data";

function App() {
  return (
    <div id="app">
      <h1>Cat Breeds</h1>
      <div className="cards-container">
        {cats.map((cat) => (
          <Card key={cat.id} cat={cat} />
        ))}
      </div>
    </div>
  );
}

export default App;
