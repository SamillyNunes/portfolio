import Header from "@/components/Header";
import AboutPage from "@/components/pages/AboutPage";
import HomePage from "@/components/pages/HomePage";

export default function Home() {
  return (
    <div className="flex flex-col">
        <Header/>
        <HomePage />
        <AboutPage/>
    </div>
  );
}
