import React, { useEffect, useState } from "react";
import Compteur from "./Compteur";
import TodoList from "./TodoList";

function useToggle(boolValue) {
  const [count, setCount] = useState(boolValue);

  const toggleCompteur = function () {
    setCount((count) => !count);
  };

  return [count, toggleCompteur];
}
function App() {
  const [compteurVisite, toggleCompteur] = useToggle(true);

  return (
    <div>
      <input
        type="checkbox"
        onChange={toggleCompteur}
        checked={compteurVisite}
      />
      {compteurVisite && <Compteur />}
      <TodoList />
    </div>
  );
}

export default App;
