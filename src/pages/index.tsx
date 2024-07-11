import Header from "@/components/Header";
import AboutPage from "@/components/pages/AboutPage";
import ContactPage from "@/components/pages/ContactPage";
import HomePage from "@/components/pages/HomePage";
import ProjectsPage from "@/components/pages/ProjectsPage";
import SkillsPage from "@/components/pages/SkillsPage";
import XpPage from "@/components/pages/XpPage";
import ProjectModal from "@/components/ProjectModal";
import { getProjects } from "@/functions/projectsFunctions";
import { ProjectModel } from "@/models/ProjectModel";
import { useState } from "react";

export async function getStaticProps(){
  const projects = await getProjects();

  return {
      props: {
          projects: projects,
      }
  }
}


export default function Home({projects}) {
  const [projectSelect, setProjectSelected] = useState<ProjectModel | null>(null);

  return (
    <div className="flex flex-col">
        <Header/>
        <HomePage />
        <AboutPage/>
        <XpPage/>
        <SkillsPage/>
        <ProjectsPage projects={projects} openProjectDialog={setProjectSelected} />
        <ContactPage />
        {projectSelect!==null && <ProjectModal project={projectSelect} onCloseModal={()=>setProjectSelected(null)} />}
    </div>
  );
}
