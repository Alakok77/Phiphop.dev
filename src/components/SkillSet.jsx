import { useState, useEffect } from 'react'
import Skill from './Skill'
import dart from '../assets/logo/dart.png'
import c from '../assets/logo/c.png'
import java from '../assets/logo/java.png'
import python from '../assets/logo/python.png'
import css from '../assets/logo/css.jpg'
import figma from '../assets/logo/figma.png'
import flutter from '../assets/logo/flutter.png'
import html from '../assets/logo/html.png'
import scence from '../assets/logo/scence.png'
import tailwind from '../assets/logo/tailwind.png'
import js from '../assets/logo/js.png'
import sql from '../assets/logo/sql.jpg'
import arduino from '../assets/logo/arduino.png'
import esp from '../assets/logo/esp.png'
import node from '../assets/logo/node.png'
import react from '../assets/logo/react.png'

export default function SkillSet(){

  const skills = [
    {logo:dart, name:"Dart"},
    {logo:flutter, name:"Flutter"},
    {logo:c, name:"C"},
    {logo:java, name:"Java"},
    {logo:scence, name:"Scene builder"},
    {logo:python, name:"python"},
    {logo:css, name:"CSS"},
    {logo:html, name:"HTML"},
    {logo:js, name:"JavaScript"},
    {logo:tailwind, name:"Tailwind"},
    {logo:figma, name:"Figma"},
    {logo:sql, name:"SQL"},
    {logo:arduino, name:"Arduino"},
    {logo:esp, name:"Espressif Systems"},
    {logo:node, name:"Node JS"},
    {logo:react, name:"React"}
  ] 

  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleResize = () => {
      setItemsPerPage(mediaQuery.matches ? 4 : 2);
    };

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const startIndex = page * itemsPerPage;
  const currentSkills = skills.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(skills.length / itemsPerPage);

  function next() {
    setPage(p => (p >= totalPages - 1 ? 0 : p + 1));
  }

  function previous() {
    setPage(p => (p <= 0 ? totalPages - 1 : p - 1));
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center h-4/5 justify-items-center'>

          {/* skill */}
          <div className="grid grid-cols-1 gap-4 place-items-start min-h-[180px]
                          md:grid-cols-2">
            {currentSkills.map((s, i) => (
              <Skill key={i} logo={s.logo} name={s.name} />
            ))}
          </div>

          {/* ... */}
          <div className="flex justify-center mt-6 gap-3 items-center">
            <div className="w-0 h-0
              border-t-[10px] border-t-transparent
              border-b-[10px] border-b-transparent
              border-r-[20px] border-r-blue-900 mr-3"
              onClick={previous}
              ></div>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === page ? "bg-cyan-500 scale-125" : "bg-cyan-200 hover:bg-cyan-400"
              }`}
              ></button>
            ))}

            <div className="w-0 h-0
              border-t-[10px] border-t-transparent
              border-b-[10px] border-b-transparent
              border-l-[20px] border-l-blue-900 ml-3"
              onClick={next}
              ></div>
          </div>
      </div>
    </>
  )
}