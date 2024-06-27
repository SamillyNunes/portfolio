import Header from "@/components/Header";
import AboutPage from "@/components/pages/AboutPage";
import HomePage from "@/components/pages/HomePage";
import ProjectsPage from "@/components/pages/Projects.page";
import SkillsPage from "@/components/pages/SkillsPage";
import XpPage from "@/components/pages/XpPage";

export default function Home() {
  return (
    <div className="flex flex-col">
        <Header/>
        <HomePage />
        <AboutPage/>
        <XpPage/>
        <SkillsPage/>
        <ProjectsPage />
    </div>
  );
}
