import AboutMe from "@/components/about-me";
import Header from "@/components/header";
import { Experiences } from "@/components/experiences";
import ProjectsList from "@/components/projects";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center p-0 w-full">
        <Header/>
        <AboutMe/>
        <Experiences/>
        <ProjectsList/>

      </main>
      <Footer/>
      {/* <footer className="m-0 p-0 flex flex-col items-center w-full">
        Created by Alan Augusto
      </footer> */}
    </div>
  );
}
