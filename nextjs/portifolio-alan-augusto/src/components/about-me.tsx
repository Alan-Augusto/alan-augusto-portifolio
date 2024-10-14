import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profileImage from '../assets/profile.png';
import { profileData } from '@/data/profile.data';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const AboutMe: React.FC = () => {
    return (
        <section id="about-me" className="p-4">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-4 w-full border">
                <Avatar className="w-24 h-24">
                    <AvatarImage src={profileImage.src} alt="Foto de perfil" />
                    <AvatarFallback>AA</AvatarFallback>
                </Avatar>

                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold">{profileData.greeting}</h2>
                    <h3 className="text-xl font-normal">{profileData.role}</h3>
                    <div className="mt-3">
                        <p>{profileData.presentation}</p>
                    </div>

                    {/* Container de stacks com flex-wrap */}
                    <div className="flex flex-wrap gap-3 mt-4 py-3">
                        {profileData.stack.map((item, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
