import Header from "@/components/Header";
import ProjectsPage from "@/components/pages/ProjectsPage";
import { convertJsonIntoProjects, getProjects } from "@/functions/projectsFunctions";

export async function getStaticProps(){
    const projects = await getProjects();
  
    return {
        props: {
            projects: projects,
        }
    }
  }
  

export default function AllProjectsPage({projects}){

    return (
        <div>
            <Header />
            <ProjectsPage projects={projects} fitAllScreen />
        </div>
    );
}