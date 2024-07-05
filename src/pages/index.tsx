import Header from "@/components/Header";
import AboutPage from "@/components/pages/AboutPage";
import ContactPage from "@/components/pages/ContactPage";
import HomePage from "@/components/pages/HomePage";
import ProjectsPage from "@/components/pages/ProjectsPage";
import SkillsPage from "@/components/pages/SkillsPage";
import XpPage from "@/components/pages/XpPage";
import { getProjects } from "@/functions/projects";

export async function getStaticProps(){
  const projects = await getProjects();

  return {
      props: {
          projects: projects,
      }
  }
}


export default function Home({projects}) {
  return (
    <div className="flex flex-col">
        <Header/>
        <HomePage />
        <AboutPage/>
        <XpPage/>
        <SkillsPage/>
        <ProjectsPage projects={projects} />
        <ContactPage />
    </div>
  );
}
