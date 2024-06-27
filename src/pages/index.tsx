import Header from "@/components/Header";
import AboutPage from "@/components/pages/AboutPage";
import HomePage from "@/components/pages/HomePage";
import XpPage from "@/components/pages/XpPage";

export default function Home() {
  return (
    <div className="flex flex-col">
        <Header/>
        <HomePage />
        <AboutPage/>
        <XpPage/>
    </div>
  );
}
