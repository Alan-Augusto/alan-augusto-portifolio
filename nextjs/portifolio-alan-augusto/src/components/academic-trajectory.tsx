'use client';
// import { useState } from 'react';
import { extracurricularData, studentData } from '@/data/students.data';
// import { Button } from './ui/button';
// import { LuChevronsDownUp, LuChevronsUpDown } from "react-icons/lu";
import { Card } from './ui/card'; // Importe o Card do shadcnUI
// import { Label } from '@radix-ui/react-menubar';
import { Chip } from './ui/chip';

const AcademicTrajectory = () => {
    // const [isVisible, setIsVisible] = useState(true);

    // const toggleVisibility = () => {
    //     setIsVisible(!isVisible);
    // };

    return (
        <Card className="p-10 w-full md:w-2/5 mx-auto transition-all duration-300 ease-in-out border-none shadow-none bg-transparent">
            <h2 className="text-2xl font-bold">👨🏼‍🎓 Meus estudos</h2>
            <h3 className="text-lg font-normal mb-5">Conheça um pouco da minha trajetória acadêmica e minha capacitações.</h3>
            {/* <Button onClick={toggleVisibility} className="mb-4 flex items-center justify-between w-full" variant="outline">
                Ver Detalhes
                {isVisible ? <LuChevronsUpDown /> : <LuChevronsDownUp />}
            </Button> */}

            <div className={`mt-4 overflow-hidden transition-max-height duration-300 ease-in-out ${true ? 'max-h-screen' : 'max-h-0'}`}>
                <h3 className="text-xl font-semibold mb-5">Formação acadêmica</h3>
                <ul className="space-y-4">
                    {studentData.map((item, index) => (
                        <li key={index} className="border-b pb-2">
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-sm">
                                {item.institution} ({item.startDate} - {item.endDate})
                            </p>
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>

                <h3 className="text-xl font-semibold mb-5 mt-10">Extracurriculares</h3>
                {extracurricularData.map((project, index) => (
                    <div key={index} className="border-b pb-2">
                        <h3 className="font-semibold">{project.title}</h3>
                        <p className="text-sm">{project.institution}</p>
                        <p>{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4 mt-0">
                        {project.items.map((item) => (
                            <Chip key={item} text={item} color={"#FF00FF"} />
                        ))}
                            </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default AcademicTrajectory;
