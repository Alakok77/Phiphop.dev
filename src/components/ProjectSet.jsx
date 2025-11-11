import Project from "./project"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useScroll } from "../context/ScrollContext";

export default function ProjectSet(){

    const [projects, setProjects] = useState([]);
    const [page, setPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(2);
    const navigate = useNavigate();
    const {projectRef} = useScroll();
    const [isMd, setIsMd] = useState(window.innerWidth >= 768);
    const [isLg, setIsLg] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        axios.get("http://localhost:3000/api/projects")
        .then(res => setProjects(res.data))
        .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        const md = window.matchMedia("(min-width: 768px)");
        const lg = window.matchMedia("(min-width: 1024px)");

        const handleResize = () => {
        const mdMatch = md.matches;
        const lgMatch = lg.matches;
        setIsMd(mdMatch);
        setIsLg(lgMatch);

        if (lgMatch) setItemsPerPage(6);
        else if (mdMatch) setItemsPerPage(4);
        else setItemsPerPage(2);
        };

        handleResize();
        md.addEventListener("change", handleResize);
        lg.addEventListener("change", handleResize);

        return () => {
        md.removeEventListener("change", handleResize);
        lg.removeEventListener("change", handleResize);
        };
    }, []);


    const handleClick = (projectName) => {
        navigate("/Project", { state: { projectName } });
    };

    const totalPages = Math.ceil(projects.length / itemsPerPage);
    const startIndex = page * itemsPerPage;
    const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

    const next = () => setPage((p) => (p >= totalPages - 1 ? 0 : p + 1));
    const previous = () => setPage((p) => (p <= 0 ? totalPages - 1 : p - 1));

    return (
        <div className="flex justify-center mt-10 p-10">
            <div className="w-250 rounded-2xl shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] p-3">
                <h1 className="font-extrabold text-cyan-800 text-2xl ml-10" ref={projectRef}>Project</h1>
                
                {/* Grid */}
                <div className="grid grid-cols-1 m-5 gap-8 md:grid-cols-2 lg:grid-cols-3
                                justify-center items-start auto-rows-auto w-fit mx-auto">
                    {currentProjects.map((p) => (
                        <Project
                        key={p._id}
                        onClick={() => handleClick(p.name)}
                        tumb={p.image}
                        name={p.name}
                        desc={p.description}
                        time={new Date(p.end_date).toLocaleDateString("en-US", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                        })}
                        />
                    ))}
                </div>

                <div className="flex justify-center items-center gap-3 mt-5">
                    {/* Previous */}
                    <div
                    className="w-0 h-0 border-t-10 border-t-transparent border-b-10 border-b-transparent
                                border-r-20 border-r-blue-900 cursor-pointer"
                    onClick={previous}
                    ></div>

                    {/* Page indicators */}
                    {isMd && Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setPage(i)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        i === page
                            ? "bg-cyan-500 scale-125"
                            : "bg-cyan-200 hover:bg-cyan-400"
                        }`}
                    ></button>
                    ))}

                    {/* Next */}
                    <div
                    className="w-0 h-0 border-t-10 border-t-transparent border-b-10 border-b-transparent
                                border-l-20 border-l-blue-900 cursor-pointer"
                    onClick={next}
                    ></div>
                </div>

            </div>
        </div>
    )
}