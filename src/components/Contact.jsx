import facebook from '../assets/logo/facebook.png'
import ig from '../assets/logo/ig.png'
import line from '../assets/logo/line.png'
import gmail from '../assets/logo/gmail.png'
import github from '../assets/logo/github.png'

export default function Contact(){
    return (
        <div className="h-80 mt-10 flex justify-center">
            <div className="shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] w-250 h-70 rounded-2xl p-5 flex flex-col gap-5 justify-center items-center">
                <h1 className="font-bold text-cyan-800 text-2xl ml-10 mr-20">Contact : </h1>
                <div className='flex gap-5 justify-center'>
                    <img className="w-20 h-20 rounded-lg shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] 
                                    flex flex-col justify-center
                                    transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)]
                                    "
                        src={gmail}>
                    </img>
                    <img className="w-20 h-20 rounded-2xl shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] 
                                        flex flex-col justify-center
                                        transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)]
                                        "
                        src={line}>
                    </img>
                    <img className="w-20 h-20 rounded-4xl shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] 
                                        flex flex-col justify-center
                                        transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)]
                                        "
                        src={ig}>
                    </img>
                    <img className="w-20 h-20 rounded-lg shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] 
                                        flex flex-col justify-center
                                        transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)]
                                        "
                        src={facebook}>
                    </img>
                    <img className="w-20 h-20 rounded-full shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] 
                                        flex flex-col justify-center
                                        transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)]
                                        "
                        src={github}>
                    </img>
                </div>
                <h1 className="font-bold text-cyan-800 text-2xl ml-10 mr-20">Location : <span className='font-medium text-cyan-700 text-xl'>Base in Bangkok, Thailand</span></h1>        
                <h1 className="font-bold text-cyan-800 text-2xl ml-10 mr-20">Available hours : <span className='font-medium text-cyan-700 text-xl'>9 AM – 6 PM</span></h1>        
            </div>
        </div>
    )
}