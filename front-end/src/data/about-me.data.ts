import { AboutMeModel, ObjectiveItemModel } from "../models/about-me.model";
import { Stack } from "../models/stack.model";
import { stacks } from "./stack.data";

const stackDictionary: { [key: number]: { complete: boolean, url: string } } = {
    1: { complete: false, url: '' },
    2: { complete: false, url: '' },
    3: { complete: false, url: '' },
    4: { complete: false, url: '' },
    5: { complete: false, url: '' },
    6: { complete: true, url: 'javascript-x-typescript' },
    7: { complete: false, url: '' },
    8: { complete: false, url: '' },
    9: { complete: false, url: '' },
    10: { complete: false, url: '' },
    11: { complete: false, url: '' },
    12: { complete: false, url: '' },
    13: { complete: false, url: '' },
    14: { complete: false, url: '' },
    15: { complete: false, url: '' },
    16: { complete: false, url: '' },
    17: { complete: false, url: '' },
    18: { complete: false, url: '' },
    19: { complete: false, url: '' },
    20: { complete: false, url: '' },
    21: { complete: false, url: '' },
    22: { complete: false, url: '' },
    23: { complete: false, url: '' },
    24: { complete: false, url: '' },
    25: { complete: false, url: '' }
};

export const aboutMeData: AboutMeModel = {
    title: "Olá, eu sou o Alan! 👋",
    role: "Desenvolvedor Full Stack",
    description: 'Apaixonado por tecnologia, comecei a desenvolver na web aos 15 anos e desde então venho me aperfeiçoando constantemente. Hoje, atuo como desenvolvedor Full Stack com foco em Angular, React, Node.js e .NET Core. Este espaço registra minha trajetória e tudo o que ainda quero aprender.',
    image: '/assets/profile.png',

    // tecnologias e aprendizado
    objective: {
        title: 'Tecnologias e Aprendizado',
        description: 'Aqui estão algumas das tecnologias que já domino ou pretendo dominar. A idéia é que o quão breve possível, eu escreva sobre todos os itens da lista. Assim poderei treinar e compartilhar meus conhecimentos.',
        items: getStacks()
    }
}


function getStacks(): ObjectiveItemModel[] {

    const allStacks: ObjectiveItemModel[] = stacks.map((stack: Stack) => {
        const stackData = stackDictionary[stack.id]; // Pega os dados do dicionário
        return {
            stack,
            complete: stackData ? stackData.complete : false, // Define 'complete' com base no dicionário
            url: stackData ? stackData.url : '' // Define 'url' com base no dicionário
        };
    });

    return allStacks;
}