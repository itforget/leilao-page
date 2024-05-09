'use client'
import Image from "next/image";
import React, { useState, useEffect } from 'react';


export default function Home() {
    const [text, setText] = useState('');
    const fullText = `<${welcome}>Bem vindo ao meu Portifolio></${welcome}>`
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 100);
  
      if (index === fullText.length) {
        clearInterval(interval);
      }
  
      return () => clearInterval(interval);
    }, [index, fullText]);
  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        
    <h1 className="text-zinc-200 text-5xl font-bold">
      {text}
      <span className="blink">|</span>
    </h1>
        <p className="text-zinc-200 text-2xl mt-4">
          This is a new paragraph element.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Click me
        </button>
      </div>
    </main>
  );
  }