"use client"
import { useEffect,useState } from "react";
import styles from"./counter.module.css";

const Storage="count";

 function Counter() {
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

 useEffect(() => {
    const saved = localStorage.getItem(Storage);
    if (saved !== null) setCount(JSON.parse(saved));
    setLoaded(true);
  }, []);

    useEffect(() => {
    if (loaded) localStorage.setItem(Storage, JSON.stringify(count));
  }, [count, loaded]);

   const Minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };



  return (
      <div className={styles.counter}>
      <h1 className={styles["counter-value"]}>{count}</h1>
        <div className={styles["counter-buttons"]}>
        <button className={styles["btn-plus"]} onClick={() => setCount(count + 1)}>+</button>
        <button className={styles["btn-minus"]} onClick={Minus}>-</button>
      </div>
    </div>
  );
}
export default Counter;