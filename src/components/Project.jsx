import test from '../assets/project/test.png'

export default function Project({ tumb, name, desc }) {
  return (
    <div className="w-70 h-70 rounded-lg shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] 
                    flex flex-col justify-center
                    transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)]
                    p-5 gap-3">
        <div className='flex flex-col gap-y-0.5'>
            <h1 className='text-cyan-900 font-semibold text-xl'>This is my project</h1>
            <p className='text-xs text-gray-600'>End date : 12 June 2010</p>
        </div>
        <img src={test} className='w-100 h-2/6 rounded-sm' />
        <p className='text-xs indent-8 text-justify max-w-[250px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum minima officiis quod ducimus beatae cum ipsa, placeat consequuntur molestias ea iusto eligendi illum, fuga ab voluptatibus laboriosam animi accusamus voluptates?</p>
    </div>
  );
}
