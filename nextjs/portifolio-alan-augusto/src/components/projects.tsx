'use client'; 
import Image from "next/image";
import { projectsData } from "@/data/projects.data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Chip } from "./ui/chip";
import { Button } from "./ui/button";

const ProjectsList = () => {
    return (
        <div className="m-10 mt-10">
            <h2 className="text-2xl font-bold">Meus Projetos</h2>
            <h3 className="text-xl font-normal mb-5">Aqui estão alguns dos projetos em que trabalhei recentemente.</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectsData.map((project) => (
                <Card key={project.id} className="shadow-lg flex flex-col h-full">
                <CardHeader>
                    <Image 
                    src={project.image || "/default-image.png"} 
                    alt={project.name} 
                    width={400} 
                    height={200} 
                    className="object-cover w-full h-48"
                    />
                </CardHeader>
                <CardContent className="flex-grow">
                    <CardTitle className="mb-1">{project.name}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2 mb-4 mt-0">
                    {project.technologies.map((tech) => (
                    <Chip key={tech} text={tech} color={"#FF00FF"} />
                    ))}
                </CardFooter>
                <CardFooter className="flex gap-2 justify-center mt-auto pb-4">
                    {project.link && <Button variant="outline" onClick={() => window.open(project.link)}>Demo</Button>}
                    <Button onClick={() => window.open(project.git)}>GitHub</Button>
                </CardFooter>
                </Card>
            ))}
            </div>
        </div>
    );
};

export default ProjectsList;
