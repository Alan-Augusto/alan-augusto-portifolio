"use client";

import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";

import { FaLinkedin, FaGithub, FaYoutube, FaBlog } from "react-icons/fa";
import { ModeToggle } from "./mode-toggle";

const Header: React.FC = () => {
    return (
        <header className="fixed w-full px-6 py-4 flex items-center justify-between bg-background shadow-md z-50">

            {/* Nome como Logo */}
            <div className="text-2xl font-bold tracking-wide text-gray-900 dark:text-gray-200">
                Alan Augusto
            </div>

            {/* Menubar de Ícones Sociais */}
            <Menubar className="flex space-x-2 md:space-x-6 border-none shadow-none">

                <MenubarMenu>
                    <MenubarTrigger asChild className="cursor-pointer">
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                        >
                            <FaLinkedin />
                        </a>
                    </MenubarTrigger>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger asChild className="cursor-pointer">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl text-gray-600 dark:text-gray-300 hover:text-black transition-colors"
                        >
                            <FaGithub />
                        </a>
                    </MenubarTrigger>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger asChild className="cursor-pointer">
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors"
                        >
                            <FaYoutube />
                        </a>
                    </MenubarTrigger>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger asChild className="cursor-pointer">
                        <a
                            href="/blog"
                            rel="noopener noreferrer"
                            className="text-xl text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors"
                        >
                            <FaBlog />
                        </a>
                    </MenubarTrigger>
                </MenubarMenu>
            </Menubar>

            {/* Botão de Modo Escuro */}
            <ModeToggle />
        
        </header>
    );
};

export default Header;
