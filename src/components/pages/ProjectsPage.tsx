import Link from "next/link";
import ProjectCard from "../ProjectCard";
import Title from "../Title";
import { convertJsonIntoProjects } from "@/functions/projectsFunctions";
import { ProjectModel } from "@/models/ProjectModel";

interface ProjectsPageInterface{
    projects: any;
    fitAllScreen?: boolean;
    openProjectDialog: (project: ProjectModel) => void;
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
                            onSelectProject={() => props.openProjectDialog(p)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}