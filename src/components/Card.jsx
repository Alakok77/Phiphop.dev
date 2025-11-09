import Skill from './Skill'
import pdf from '../assets/logo/pdf.png'
import github from '../assets/logo/github.png'
import { useState } from 'react'

export function Card_Main({Name, desc, url, project, image, git}){
    const [selectedImage, setSelectedImage] = useState(image[0]);

    const openlink = (link) => {
        window.open(link, "_blank");
    };

    const isYouTube = (src) =>
    src.includes("youtube.com") || src.includes("youtu.be");

    return(
            <div className="rounded-2xl w-250 shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] p-5 mb-8">

                <div className="w-250 h-130 rounded-2xl p-5 flex flex-col items-center gap-y-1">
                    {
                        isYouTube(selectedImage) ? (
                            <iframe 
                                    width="560" 
                                    height="315" 
                                    src={selectedImage}
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerpolicy="strict-origin-when-cross-origin" 
                                    allowfullscreen
                                    className='w-4/5 h-4/5 rounded-2xl shadow-[0_0_10px_5px_rgba(0,0,0,0.16)]'></iframe>
                        ) : (
                            <img src={selectedImage} 
                            className='w-4/5 h-4/5 rounded-2xl shadow-[0_0_10px_5px_rgba(0,0,0,0.16)]' />
                        )}

                    <div className='flex w-4/5 h-20 gap-3 items-center justify-center'>
                        {image.map((item, i) => (
                            <div
                                key={i}
                                onClick={() => setSelectedImage(item)}
                                className='cursor-pointer flex shrink-0  aspect-video w-20 h-10'
                            >
                                {isYouTube(item) ? (
                                    <iframe 
                                    width="560" 
                                    height="315" 
                                    src={item}
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerpolicy="strict-origin-when-cross-origin" 
                                    allowfullscreen
                                    className='w-full h-full rounded-lg shadow-[0_0_10px_5px_rgba(0,0,0,0.06)] object-cover hover:scale-105 transition-transform duration-300 pointer-events-none'></iframe>
                                ) : (
                                    <img key={i} 
                                        src={item} 
                                        onClick={() => setSelectedImage(item)} 
                                        className='w-20 h-10 rounded-lg shadow-[0_0_10px_5px_rgba(0,0,0,0.06)] object-cover hover:scale-105 transition-transform duration-300' />
                                )}
                            </div>
                        ))}
                    </div>
                </div>


                <h1 className="text-cyan-800 font-bold text-xl">{Name}</h1>
                <p className="indent-8 mt-3 text-justify">{desc}</p>
                <div className='flex items-center justify-center gap-5 mt-5'>
                    <div className='h-10 rounded-lg shadow-[0_0_5px_2px_rgba(0,0,0,0.08)] 
                                    transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.08)]
                                    flex bg-cyan-50 items-center p-2 gap-2 cursor-pointer'
                        onClick={() => {openlink(url)}}>
                                      <img src={pdf} className='w-8 h-8'/>  
                                      <div>
                                        <p className='text-xs'>{project}.pdf</p>
                                        <p className='text-xs text-cyan-600'>Dowload</p>
                                      </div>
                    </div>

                    <div className='h-10 rounded-lg shadow-[0_0_5px_2px_rgba(0,0,0,0.08)] 
                                    transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.08)]
                                    flex bg-cyan-50 items-center p-2 gap-2 cursor-pointer'
                        onClick={() => {openlink(git)}}>
                                      <img src={github} className='w-8 h-8'/>  
                                      <div>
                                        <p className='text-xs'>{project}</p>
                                        <p className='text-xs text-cyan-600'>Source code</p>
                                      </div>
                    </div>
                </div>
            </div>
    )
}

export function Card_Tool({used}){

    const openlink = (link) => {
        window.open(link, "_blank");
    };

    return (
        <div className="rounded-2xl w-250 shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] p-5 mb-8 cursor-pointer">
            <h1 className="text-cyan-800 font-bold text-xl mb-3">Tools and Technologies</h1>
            <div className='flex flex-wrap justify-center gap-5'>
                {used.map((item, i) => (
                    <Skill key={i} logo={item.logo} name={item.tool} url={() => {openlink(item.src)}}/>
                ))}
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

export function Card_Team({desc}){
    return(
        <div className="rounded-2xl w-250 shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] p-5 mb-8">
            <h1 className="text-cyan-800 font-bold text-xl">Teammate</h1>
            <div className='flex justify-center'>
                <ul className='grid grid-cols-2 justify-center mt-5 w-fit gap-3 gap-x-15'>
                    {desc.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
