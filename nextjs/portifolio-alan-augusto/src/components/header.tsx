import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"

import { FaLinkedin, FaGithub, FaYoutube, FaBlog } from 'react-icons/fa';

const Header: React.FC = () => {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger asChild>
                    <a 
                      href="https://www.linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ cursor: 'pointer' }}
                    >
                        <FaLinkedin />
                    </a>
                </MenubarTrigger>
            </MenubarMenu>
            
            <MenubarMenu>
                <MenubarTrigger asChild>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ cursor: 'pointer' }}
                    >
                        <FaGithub />
                    </a>
                </MenubarTrigger>
            </MenubarMenu>
            
            <MenubarMenu>
                <MenubarTrigger asChild>
                    <a 
                      href="https://youtube.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ cursor: 'pointer' }}
                    >
                        <FaYoutube />
                    </a>
                </MenubarTrigger>
            </MenubarMenu>
            
            <MenubarMenu>
                <MenubarTrigger asChild>
                    <a 
                      href="https://yourblog.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ cursor: 'pointer' }}
                    >
                        <FaBlog />
                    </a>
                </MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    );
};

export default Header;
