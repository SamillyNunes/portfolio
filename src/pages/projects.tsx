import Header from "@/components/Header";
import ProjectsPage from "@/components/pages/ProjectsPage";
import ProjectModal from "@/components/ProjectModal";
import ProjectsContext from "@/context/ProjectsContext";
import { getProjects } from "@/functions/projectsFunctions";
import { useContext } from "react";

export async function getStaticProps(){
    const projects = await getProjects();
  
    return {
        props: {
            projects: projects,
        }
    }
  }
  

export default function AllProjectsPage({projects}){

    const projectsData = useContext(ProjectsContext);

    return (
        <div>
            <Header redirectToHomeFirst />
            <ProjectsPage projects={projects} fitAllScreen openProjectDialog={projectsData.setProjectSelected} />
            
            {projectsData.projectSelected !==null && <ProjectModal project={projectsData.projectSelected} onCloseModal={()=>projectsData.setProjectSelected(null)} />}
        </div>
    );
}