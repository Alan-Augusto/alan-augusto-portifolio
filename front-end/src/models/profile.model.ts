import { SafeHtml } from "@angular/platform-browser";

//Informações principal do profissional da landing page
export interface Profile {
    name: string;
    role: string;
    description?: string;
    image?: string;
    socialLinks?: SocialLinks[]
}

//Informações de redes sociais do profissional
export interface SocialLinks {
    name: string;
    url: string;
    local?: boolean;
    svg?: string;
    sanitizedSvg?: SafeHtml;
}