"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { preconnect } from "react-dom";

export default function Testpage() {
  // let count=0;
  const[count,setCount]=useState(0);

  const incrementByOne=()=>{
    // count++;
    setCount((prevCount)=>{
      console.log(prevCount);
     return prevCount+1
    });
  
  };
  const decrementByOne=()=>{
     setCount((prevCount)=>{
      return prevCount-1
    });
  }
 

  return (
  <>
  <h2>{count}</h2>
  <button onClick={incrementByOne}>+</button>
  {"     "}
  <button onClick={decrementByOne}>-</button>
  </>
  );
}
