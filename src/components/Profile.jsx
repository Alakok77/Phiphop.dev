import me from '../assets/me.jpg'
import Timeline from './Timeline'

export default function Profile(){
    return (
        <>
            <div className="flex gap-10 content-center justify-center">
                {/* Profile card */}
                <div className="w-120 h-100 shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] rounded-2xl flex justify-center p-2">
                    <div className="content-center flex flex-col gap-y-5 items-center">
                        <h1 className='font-extrabold text-cyan-800 text-2xl'>My Profile</h1>
                        <img src={me} alt="" className='rounded-full w-50 h-50 object-cover' />
                        <ul className=' w-100 flex flex-col items-center'>
                            <li className='text-cyan-600 font-bold'><span className='font-medium text-cyan-950'>Name :</span> Phiphop thong-aun</li>
                            <li className='text-cyan-600 font-bold'><span className='font-medium text-cyan-950'>Nickname : </span>Tob</li>
                            <li className='text-cyan-600 font-bold'><span className='font-medium text-cyan-950'>Birthday : </span>20 August 2005</li>
                            <li className='text-cyan-600 font-bold'><span className='font-medium text-cyan-950'>Hometown :</span> Chainat, Thailand</li>
                        </ul>
                    </div>
                </div>
                {/* Education card */}
                <div className="w-120 h-100 shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] rounded-2xl flex justify-center p-2 flex-col items-center">
                    <h1 className='font-extrabold text-cyan-800 text-2xl'>Education</h1>
                    <Timeline/>
                </div>
            </div>
        </>
    )
}