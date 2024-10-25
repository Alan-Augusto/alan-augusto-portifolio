import AboutMe from "@/components/about-me";
import { ModeToggle } from "@/components/mode-toggle";
import Header from "@/components/header";
import { Experiences } from "@/components/experiences";
import ProjectsList from "@/components/projects";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center p-0 w-full">
        <Header/>
        <AboutMe/>
        <Experiences/>
        <ProjectsList/>

      </main>
      <footer className="m-0 p-0 flex flex-col items-center w-full">
        Created by Alan Augusto
      </footer>
    </div>
  );
}
