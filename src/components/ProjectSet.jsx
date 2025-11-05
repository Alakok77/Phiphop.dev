import Project from "./project"

export default function ProjectSet(){
    return (
        <div className="flex justify-center mt-10 p-10">
            <div className="w-250 rounded-2xl shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] p-3">
                <h1 className="font-extrabold text-cyan-800 text-2xl ml-10">Project</h1>
                
                {/* Grid */}
                <div className="grid grid-cols-3 m-5 gap-8">
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
        </div>
    )
}