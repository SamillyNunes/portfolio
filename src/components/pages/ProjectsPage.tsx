import ProjectCard from "../ProjectCard";
import Title from "../Title";
import { convertJsonIntoProjects, getProjects } from "@/functions/projects";


export default function ProjectsPage({projects}){

    const projectsModels = convertJsonIntoProjects(projects);


    return (
        <div>
            <div className="h-min p-10">
                <Title label="PROJETOS" />
                <div className="
                    mt-10 
                    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 
                    justify-center justify-items-center
                ">
                    {projectsModels?.map((p, i) => (
                        <ProjectCard
                            title={p.title}
                            description= {p.description}
                            link={p.link}
                            photos={p.photos}
                            key={i}
                        />
                    ))}
                </div>
            </div>
            {/* <div className="h-screen w-screen bg-slate-400 absolute">

            </div> */}
        </div>
    );
}