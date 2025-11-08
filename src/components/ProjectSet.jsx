import Project from "./project"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProjectSet(){

    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3000/api/projects")
        .then(res => setProjects(res.data))
        .catch(err => console.error(err));
    }, []);

    const handleClick = (projectName) => {
        navigate("/Project", { state: { projectName } });
    };

    return (
        <div className="flex justify-center mt-10 p-10">
            <div className="w-250 rounded-2xl shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] p-3">
                <h1 className="font-extrabold text-cyan-800 text-2xl ml-10">Project</h1>
                
                {/* Grid */}
                <div className="grid grid-cols-3 m-5 gap-8">
                    {
                        projects.map((p) => (
                            <Project 
                                onClick={() => handleClick(p.name)}
                                key={p._id}
                                tumb={p.image}
                                name={p.name}
                                desc={p.description}
                                time={new Date(p.end_date).toLocaleDateString("en-US", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                })}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}