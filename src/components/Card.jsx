import test from '../assets/project/wordice.png'
import test2 from '../assets/project/formulaHub.png'
import test3 from '../assets/project/Offlearn.png'
import Skill from './Skill'
import react from '../assets/logo/react.png'
import pdf from '../assets/logo/pdf.png'
import { useState } from 'react'

export function Card_Main({Name, desc, url, project}){
    const [selectedImage, setSelectedImage] = useState(test);

    const openlink = (link) => {
        window.open(link, "_blank");
    };

    return(
            <div className="rounded-2xl w-250 shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] p-5 mb-8">
                <div className="w-250 h-130 rounded-2xl p-5 flex flex-col items-center gap-y-1">
                    <img src={selectedImage} className='w-4/5 h-4/5 rounded-2xl shadow-[0_0_10px_5px_rgba(0,0,0,0.16)]' />
                    <div className='flex w-4/5 h-20 gap-3 items-center justify-center'>
                        <img src={test} onClick={() => setSelectedImage(test)} className='w-20 h-10 rounded-lg shadow-[0_0_10px_5px_rgba(0,0,0,0.16)] object-cover hover:scale-105 transition-transform duration-300' />
                        <img src={test2} onClick={() => setSelectedImage(test2)} className='w-20 h-10 rounded-lg shadow-[0_0_10px_5px_rgba(0,0,0,0.16)] object-cover hover:scale-105 transition-transform duration-300' />
                        <img src={test3} onClick={() => setSelectedImage(test3)} className='w-20 h-10 rounded-lg shadow-[0_0_10px_5px_rgba(0,0,0,0.16)] object-cover hover:scale-105 transition-transform duration-300' />
                    </div>
                </div>
                <h1 className="text-cyan-800 font-bold text-xl">{Name}</h1>
                <p className="indent-8 mt-3 text-justify">{desc}</p>
                <div className='flex items-center justify-center gap-5 mt-5'>
                    <div className='h-10 rounded-lg shadow-[0_0_5px_2px_rgba(0,0,0,0.08)] 
                                    transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.08)]
                                    flex bg-cyan-50 items-center p-2 gap-2'
                        onClick={() => {openlink(url)}}>
                                      <img src={pdf} className='w-8 h-8'/>  
                                      <div>
                                        <p className='text-xs'>{project}.pdf</p>
                                        <p className='text-xs text-cyan-600'>Dowload</p>
                                      </div>
                                    </div>
                </div>
            </div>
    )
}

export function Card_Tool(){
    return (
        <div className="rounded-2xl w-250 shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] p-5 mb-8">
            <h1 className="text-cyan-800 font-bold text-xl mb-3">Tools and Technologies</h1>
            <div className='flex flex-wrap justify-center gap-5'>
                <Skill logo={react} name={"React"}/>
                <Skill logo={react} name={"React"}/>
                <Skill logo={react} name={"React"}/>
                <Skill logo={react} name={"React"}/>
                <Skill logo={react} name={"React"}/>
                <Skill logo={react} name={"React"}/>
                <Skill logo={react} name={"React"}/>
                <Skill logo={react} name={"React"}/>
                <Skill logo={react} name={"React"}/>
            </div>
        </div>
    )
}

export function Card_A({Name, desc}){
    return(
        <div className="rounded-2xl w-250 shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] p-5 mb-8">
            <h1 className="text-cyan-800 font-bold text-xl">{Name}</h1>
            <p className="indent-8 mt-3 text-justify">{desc}</p>
        </div>
    )
}

export function Card_B({Name, color, desc}){
    const bgColor =
    color === "red"
      ? "text-red-600"
      : color === "green"
      ? "text-green-600"
      : "text-gray-600"

    return(
        <div className="rounded-2xl w-120 shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] p-5 mb-8">
            <h1 className={`${bgColor} font-bold text-xl`}>{Name}</h1>
            <ul className="list-disc list-inside mt-3 text-justify text-gray-700 space-y-1">
                {desc.map((item, i) => (
                <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
