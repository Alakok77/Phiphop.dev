import facebook from '../assets/logo/facebook.png'
import ig from '../assets/logo/ig.png'
import line from '../assets/logo/line.png'
import gmail from '../assets/logo/gmail.png'
import github from '../assets/logo/github.png'
import { useScroll } from '../context/ScrollContext'

export default function Contact(){
    const {contactRef} = useScroll();

    const openlink = (link) => {
        window.open(link, "_blank");
    };

    return (
        <div className="mt-10 flex justify-center p-10" ref={contactRef}>
            <div className="shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] w-250 rounded-2xl p-5
                            flex flex-col gap-2 justify-center items-center">
                <h1 className="font-bold text-cyan-800 text-2xl ml-10 mr-20">Contact</h1>
                <div className='flex gap-5 justify-center
                                flex-wrap'>
                    <img className="md:w-15 md:h-15 w-10 h-10 rounded-lg shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] 
                                    flex flex-col justify-center cursor-pointer
                                    transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)]
                                    "
                        onClick={() => {openlink("https://mail.google.com/mail/?view=cm&fs=1&to=top.p1234558@gmail.com")}}
                        src={gmail}>
                    </img>
                    <img className="md:w-15 md:h-15 w-10 h-10 rounded-2xl shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] 
                                        flex flex-col justify-center cursor-pointer
                                        transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)]
                                        "
                        onClick={() => {openlink("https://line.me/ti/p/~0825508806")}}
                        src={line}>
                    </img>
                    <img className="md:w-15 md:h-15 w-10 h-10 rounded-4xl shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] 
                                        flex flex-col justify-center cursor-pointer
                                        transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)]
                                        "
                        onClick={() => {openlink("https://www.instagram.com/to.exphp/")}}
                        src={ig}>
                    </img>
                    <img className="md:w-15 md:h-15 w-10 h-10 rounded-lg shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] 
                                        flex flex-col justify-center cursor-pointer
                                        transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)]
                                        "
                        onClick={() => {openlink("https://web.facebook.com/phiphop.thong.aun?locale=th_TH")}}
                        src={facebook}>
                    </img>
                    <img className="md:w-15 md:h-15 w-10 h-10 rounded-full shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] 
                                        flex flex-col justify-center cursor-pointer
                                        transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)]
                                        "
                        onClick={() => {openlink("https://github.com/Alakok77")}}
                        src={github}>
                    </img>
                </div>
                <h1 className="font-bold text-cyan-800 md:text-lg ml-10 mr-20 text-sm">Location : <span className='font-medium text-cyan-700 md:text-base text-sm'>Base in Bangkok, Thailand</span></h1>        
                <h1 className="font-bold text-cyan-800 md:text-lg ml-10 mr-20 text-sm">Available hours : <span className='font-medium text-cyan-700 md:text-base text-sm'>9 AM – 6 PM</span></h1>        
            </div>
        </div>
    )
}