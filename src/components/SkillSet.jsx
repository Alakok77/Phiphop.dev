import { useState } from 'react'
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
  ] 

  const itemsPerPage = 4;
  const [page, setPage] = useState(0);

  const startIndex = page * itemsPerPage;
  const currentSkills = skills.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(skills.length / itemsPerPage);

  return (
    <>
      <div className='flex flex-col items-center justify-center h-4/5'>

          {/* skill */}
          <div className="grid grid-cols-2 gap-4 place-items-center">
            {currentSkills.map((s, i) => (
              <Skill key={i} logo={s.logo} name={s.name} />
            ))}
          </div>

          {/* ... */}
          <div className="flex justify-center mt-6 gap-3">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === page ? "bg-cyan-500 scale-125" : "bg-cyan-200 hover:bg-cyan-400"
                }`}
              ></button>
            ))}
          </div>
      </div>
    </>
  )
}