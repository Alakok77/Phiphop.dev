import { useNavigate } from "react-router-dom";

export default function NavBar() {

  const navigate = useNavigate();
  
  function handleClick() {
    navigate("/")
  }

  return (
    <div className="h-20 flex justify-between content-center pl-10 rounded-b-lg shadow-lg shadow-stone-300 mb-10">
      <div onClick={handleClick} className="text-cyan-900 text-lg font-semibold content-center cursor-pointer">Phiphop.dev</div>
        <ul className="w-70 flex justify-evenly">
            <li className="text-cyan-900 text-lg font-semibold content-center">About me</li>
            <li className="text-cyan-900 text-lg font-semibold content-center">Project</li>
        </ul>
    </div>
  );
}