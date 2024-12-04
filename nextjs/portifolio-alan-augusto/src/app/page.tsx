import AboutMe from "@/components/about-me";
import Header from "@/components/header";
import { Experiences } from "@/components/experiences";
import ProjectsList from "@/components/projects";
import Footer from "@/components/footer";
import AcademicTrajectory from "@/components/academic-trajectory";
import DownloadButton from "@/components/download-button";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center p-0 w-full" id="pdf-content">
        <Header/>
        <AboutMe/>
        <DownloadButton/>
        <Experiences/>
        <ProjectsList/>
        <AcademicTrajectory/>
      </main>
      <Footer/>
      {/* <footer className="m-0 p-0 flex flex-col items-center w-full">
        Created by Alan Augusto
      </footer> */}
    </div>
  );
}
