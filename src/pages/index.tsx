import Header from "@/components/Header";
import AboutPage from "@/components/pages/AboutPage";
import AwardsPage from "@/components/pages/AwardsPage";
import ContactPage from "@/components/pages/ContactPage";
import HomePage from "@/components/pages/HomePage";
import ProjectsPage from "@/components/pages/ProjectsPage";
import SkillsPage from "@/components/pages/SkillsPage";
import XpPage from "@/components/pages/XpPage";
import ProjectModal from "@/components/ProjectModal";
import ProjectsContext from "@/context/ProjectsContext";
import { getProjects } from "@/functions/projectsFunctions";
import { ProjectModel } from "@/models/ProjectModel";
import { useContext, useState } from "react";

export async function getStaticProps(){
  const projects = await getProjects();

  return {
      props: {
          projects: projects,
      }
  }
}


export default function Home({projects}) {

  const projectsData = useContext(ProjectsContext);

  return (
    <div className="flex flex-col">
        <Header/>
        <HomePage />
        <AboutPage/>
        <XpPage/>
        <SkillsPage/>
        <ProjectsPage projects={projects} openProjectDialog={projectsData.setProjectSelected} />
        <AwardsPage />
        <ContactPage />
        {projectsData.projectSelected !==null && <ProjectModal project={projectsData.projectSelected} onCloseModal={()=>projectsData.setProjectSelected(null)} />}
    </div>
  );
}
