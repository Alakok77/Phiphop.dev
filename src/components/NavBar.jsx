import { useNavigate, useLocation } from "react-router-dom";
import { useScroll } from "../context/ScrollContext";
import { useState } from "react";

export default function NavBar() {

  const navigate = useNavigate();
  const location = useLocation();
  const {aboutRef, projectRef, contactRef} = useScroll();
  const [navIsOpen, setNavIsOpen] = useState(false);
  
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

  const list = [
                { label: "Project", ref: projectRef },
                { label: "About", ref: aboutRef },
                { label: "Contact", ref: contactRef },
              ];

  return (
    <>
      <div className="h-20 flex justify-between content-center pl-10 rounded-b-lg w-full pr-10 items-center
                    shadow-stone-300 mb-10 bg-white/90 backdrop-blur-md shadow-md fixed top-0 z-50">
        <div onClick={handleClick} className="text-cyan-900 text-lg font-semibold content-center cursor-pointer">Phiphop.dev</div>
        {/* hamberger */}
        <div className="md:hidden relative flex items-center justify-end">
          <button
            onClick={() => setNavIsOpen(!navIsOpen)}
            className="relative w-10 h-10 flex flex-col justify-center items-center transition-all duration-500"
          >
            <span
              className={`block absolute w-6 h-0.5 bg-cyan-900 transition-all duration-500 ease-in-out
                ${navIsOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}`}
            ></span>
            <span
              className={`block absolute w-6 h-0.5 bg-cyan-900 transition-all duration-500 ease-in-out
                ${navIsOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`block absolute w-6 h-0.5 bg-cyan-900 transition-all duration-500 ease-in-out
                ${navIsOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}`}
            ></span>
          </button>

          <div
            className={`absolute top-full right-0 mt-15 -translate-y-1/2 bg-white/90 backdrop-blur-md 
                        rounded-xl shadow-md
                        transition-all duration-500 ease-in-out 
                        ${navIsOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
          >
            <ul className="gap-3 px-5 py-3">
              {list.map((item) => (
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
        </div>

        {/* md */}
        <ul className="hidden w-70 md:flex justify-evenly items-center">
            {list.map((item) => (
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
    </>
  );
}