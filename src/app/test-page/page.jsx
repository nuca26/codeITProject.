"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Testpage() {
  // let count=0;
  const [count,setCount]=useState(0);
  useEffect(()=>{
     console.log("გამარჯობა");
    //  dependency array :
  },[count]
);
 useEffect(()=>{
  localStorage.setItem9("username","nuca26");
 },[])
   
  const incrementByOne=()=>{
    // count ++
    setCount((prevCount)=>{
        // console.log(prevCount);
        return prevCount +1;
      
    });
  
  };
  const decrementByOne = () => {
    
      setCount((prevCount)=>{
   return prevCount-1 ;
      })

    };
  return (
    <>
      <h2>{count}</h2>
      <button onClick = {incrementByOne}>+</button>
      {"     "}
      <button onClick = {decrementByOne}>-</button>
      </>
      );
    }
