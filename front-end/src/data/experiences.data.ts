import { ExperiencesModel } from "../models/experiences.model";



export const experiencesData:ExperiencesModel[] = [
    {
        companyName: 'Thyssen Krupp Elevadores',
        role: 'Estagiário',
        startDate: '03/2020',
        endDate: '06/2020',
        description: 'Como estagiário atuei auxiliando na manutenção de elevadores e posteriormente na gestão de pessoas. Auxiliando na organização de escalas e treinamentos dos técnicos.',
        stacks: []
    },
    {
        companyName: 'Blossom Consult',
        role: 'Estagiário → Técnico',
        startDate: '09/2020',
        endDate: '02/2024',
        description: 'Iniciei minha trajetória como estagiário trabalhando na confecção de desenhos e modelos 3D de estruturas metálicas e equipamentos mecânicos. Porteriormente, como técnico, fiquei responsável por elaborar soluções de automação e controle de processos internos, unindo a engenharia com a tecnologia.',
        stacks: [1,2,20,25, 31]
    },
    {
        companyName: "Keevo Softwares",
        role: "Estagiário → Dev Jr",
        startDate: "11/2023",
        endDate: "Atual",
        description: "Atualmente atuo como desenvolvedor Full Stack, trabalhando com Angular, React, Node.js e .NET Core. Atuo no desenvolvimento de aplicações web e mobile, além de APIs e integrações com sistemas legados.",
        stacks: [1,2,5,6,7,8,9,12,13,19,21,22,24,26,27]
    }
]