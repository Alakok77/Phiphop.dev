export default function Project({ tumb, name, desc, time }) {
  return (
    <div className="w-70 h-70 rounded-lg shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] 
                    flex flex-col justify-start
                    transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)]
                    p-5 gap-3">
        <div className='flex flex-col gap-y-0.5'>
            <h1 className='text-cyan-900 font-semibold text-xl'>{name}</h1>
            <p className='text-xs text-gray-600'>End date : {time}</p>
        </div>
        <img src={tumb} className='w-100 h-2/6 rounded-sm object-cover' />
        <p className='text-xs indent-8 text-justify max-w-[250px]'>{desc}</p>
    </div>
  );
}
