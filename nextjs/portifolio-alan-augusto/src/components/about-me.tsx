import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { profileData } from '@/data/profile.data';
import { Chip } from './ui/chip';
import { Skeleton } from './ui/skeleton';

const AboutMe: React.FC = () => {
    return (
        <section id="about-me" className="p-10 mt-10">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-4 w-full p-2 md:p-5 pt-10 ">
                <Avatar className="w-40 h-40">
                    <AvatarImage src={profileData.image} alt="Foto de perfil" />
                    <AvatarFallback>
                        <Skeleton className="w-40 h-40 rounded-full" />
                    </AvatarFallback>
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
                            <Chip
                                key={index}
                                text={item}
                                icon=""
                                color="#FF00FF"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
