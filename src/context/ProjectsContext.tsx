import { ProjectModel } from "@/models/ProjectModel";
import { createContext, useState } from "react";

interface ProjectsContextValue{
    projectSelected: ProjectModel | null;
    setProjectSelected: (project: ProjectModel) => void;
}

const ProjectsContext = createContext<ProjectsContextValue>(undefined);

export function ProjectsProvider(props: any){
    
  const [projectSelect, setProjectSelected] = useState<ProjectModel | null>(null);

    return (
        <ProjectsContext.Provider value={{
            projectSelected: projectSelect,
            setProjectSelected

        }}>
            {props.children}
        </ProjectsContext.Provider>
    );
}

export default ProjectsContext;
export const ProjectsConsumer = ProjectsContext.Consumer;