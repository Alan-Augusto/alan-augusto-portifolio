import Image from "next/image";
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/about-me";
import { ModeToggle } from "@/components/mode-toggle";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center border p-2 w-full">
        <ModeToggle/>
        <Header/>
        <AboutMe/>

      </main>
      <footer className="m-0 p-0 flex flex-col items-center w-full">
        Created by Alan Augusto
      </footer>
    </div>
  );
}
