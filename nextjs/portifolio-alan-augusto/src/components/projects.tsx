'use client'; 
import Image from "next/image";
import { projectsData } from "@/data/projects.data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { MyButton } from "./ui/my-button";
import { Chip } from "./ui/chip";
import { MenubarSeparator } from "./ui/menubar";
import { Separator } from "./ui/separator";

const ProjectsList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectsData.map((project) => (
                <Card key={project.id} className="shadow-lg">
                    <CardHeader>
                        <Image 
                            src={project.image || "/default-image.png"} 
                            alt={project.name} 
                            width={400} 
                            height={200} 
                            className="object-cover w-full h-48"
                        />
                        <CardTitle>{project.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>{project.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        {project.technologies.map((tech) => (
                            <Chip key={tech} text={tech} color={"#FF00FF"} />
                        ))}
                    </CardFooter>
                    <CardFooter className="flex justify-between">
                        <MyButton 
                            text={"GitHub"} 
                            icon="🎃" 
                            color={"#5ef39f"} 
                            onClick={() => window.open(project.link)}                            
                        />
                        <MyButton text={"Demo"} icon="🚀" color={"#f35eaf"} onClick={() => window.open(project.git)} />
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};

export default ProjectsList;
