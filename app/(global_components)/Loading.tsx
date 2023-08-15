"use client";

import Image from "next/image";
import LoadingGif from "../../public/img/loading.gif"
import "../../styles/loading.css"
import React, { useState, useEffect } from 'react';


function LoadingAnimation() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : ''));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>Carregando{dots}</div>;
};

export default function Loading() {
  return (
    <div className="loading-container">
      <div><h1>{LoadingAnimation()}</h1></div>      
      <Image src={LoadingGif} className="loading_animation" alt="Loading" />
    </div>
  );
};
