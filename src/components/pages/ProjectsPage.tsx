import Link from "next/link";
import ProjectCard from "../ProjectCard";
import Title from "../Title";
import { convertJsonIntoProjects, getProjects } from "@/functions/projectsFunctions";

interface ProjectsPageInterface{
    projects: any;
    fitAllScreen?: boolean;
}

export default function ProjectsPage(props: ProjectsPageInterface){

    const projectsModels = convertJsonIntoProjects(props.projects);
    const fitAllScreen = props.fitAllScreen ?? false;


    return (
        <div id="projects">
            <div className={`
                ${fitAllScreen ? 'h-screen' : 'h-min' }
                p-10    
            `}>
                <div className={`
                    flex flex-row justify-between
                `}>
                    <Title label="PROJETOS" />
                    {!fitAllScreen && 
                        <Link href="/projects">
                            Ver todos
                        </Link>
                    }
                </div>
                <div className={`
                    mt-10 
                    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 
                    justify-center justify-items-center
                    ${fitAllScreen ? 'h-[90%] ' : ''}
                `}>
                    {projectsModels?.map((p, i) => (
                        (fitAllScreen || p.isHighlight) && <ProjectCard
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