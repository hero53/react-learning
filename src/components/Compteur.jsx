import React, { useEffect, useState } from "react";

function useAutoIcrement(step) {
  const [count, setCount] = useState(step);

  const autoIncrement = function () {};

  useEffect(() => {
    const time = window.setInterval(() => {
      setCount((count) => count + step);
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, []);

  return count;
}
function Compteur() {
  const count = useAutoIcrement(10);
  return <button>Incrementer : {count}</button>;
}
export default Compteur;
