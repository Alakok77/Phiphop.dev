export default function Skill({ logo, name }) {
  return (
    <div className="w-40 h-20 rounded-lg shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] 
                    flex flex-col items-center justify-center 
                    transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)]">
      <img src={logo} alt={name} className="w-10 h-10 rounded-md" />
      <h4 className="text-cyan-700 font-medium mt-1">{name}</h4>
    </div>
  );
}
