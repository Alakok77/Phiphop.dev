import { useNavigate, useLocation } from "react-router-dom";
import { useScroll } from "../context/ScrollContext";

export default function NavBar() {

  const navigate = useNavigate();
  const location = useLocation();
  const {aboutRef, projectRef, contactRef} = useScroll();
  
  function handleClick() {
    navigate("/")
  }

  const scrollWithOffset = (ref) => {
    if (!ref.current) return;
    const navHeight = 100;
    const y = ref.current.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const scrollTo = (ref) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollWithOffset(ref), 300);
    } else {
      scrollWithOffset(ref);
    }
  };

  return (
    <div className="h-20 flex justify-between content-center pl-10 rounded-b-lg shadow-stone-300 mb-10 bg-white/90 backdrop-blur-md shadow-md fixed w-full top-0 left-0">
      <div onClick={handleClick} className="text-cyan-900 text-lg font-semibold content-center cursor-pointer">Phiphop.dev</div>
        <ul className="w-70 flex justify-evenly items-center">
            {[
              { label: "Project", ref: projectRef },
              { label: "About", ref: aboutRef },
              { label: "Contact", ref: contactRef },
            ].map((item) => (
              <li
                key={item.label}
                className="relative text-cyan-900 text-lg font-semibold cursor-pointer
                          after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                          after:h-0.5 after:w-0 after:bg-cyan-700 after:transition-all after:duration-300
                          hover:after:w-full hover:after:left-0"
                onClick={() => scrollTo(item.ref)}
              >
                {item.label}
              </li>
            ))}
        </ul>
    </div>
  );
}