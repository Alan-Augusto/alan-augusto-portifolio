import Image from "next/image";
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/about-me";
import { ModeToggle } from "@/components/mode-toggle";
import Header from "@/components/header";
import { Experiences } from "@/components/experiences";
import ProjectsList from "@/components/projects";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center p-2 w-full">
        <ModeToggle/>
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
