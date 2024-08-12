import { Theme } from "../models/theme.model";

export const lightTheme: Theme = {
    colors: {
        primary: "#FFFFFF", // Cor principal para o modo claro
        secondary: "#F0F0F0", // Cor secundária para o modo claro
        background: "#EAEAEA", // Cor de fundo para o modo claro
        text: "#000000", // Cor do texto para o modo claro
        accent: "#6200EE" // Cor de destaque para o modo claro
    },
    typography: {
        fontFamily: "'Roboto', sans-serif", // Família de fontes para o modo claro
        fontSize: {
            heading: "2rem", // Tamanho da fonte para títulos
            subheading: "1.5rem", // Tamanho da fonte para subtítulos
            body: "1rem", // Tamanho da fonte para o corpo do texto
            small: "0.875rem" // Tamanho da fonte para textos pequenos
        },
        fontWeight: {
            regular: 400, // Peso da fonte para texto regular
            bold: 700 // Peso da fonte para texto em negrito
        }
    },
    spacing: {
        small: "8px", // Espaçamento pequeno
        medium: "16px", // Espaçamento médio
        large: "24px" // Espaçamento grande
    },
    borders: {
        radius: "4px", // Raio de borda para cantos arredondados
        width: "1px", // Largura da borda
        color: "#CCCCCC" // Cor da borda
    },
    shadows: {
        small: "0 2px 4px rgba(0, 0, 0, 0.1)", // Sombra pequena
        medium: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sombra média
        large: "0 8px 16px rgba(0, 0, 0, 0.1)" // Sombra grande
    },
    sizes: {
        container: "1200px", // Largura do container principal
        maxWidth: "100%" // Largura máxima do layout
    },
    transitions: {
        duration: {
            short: "200ms", // Duração curta para transições
            medium: "300ms", // Duração média para transições
            long: "500ms" // Duração longa para transições
        },
        easing: {
            easeIn: "cubic-bezier(0.5, 0, 0.5, 1)", // Função de easing para transição ease-in
            easeOut: "cubic-bezier(0, 0, 0.5, 1)", // Função de easing para transição ease-out
            easeInOut: "cubic-bezier(0.5, 0, 0.5, 1)" // Função de easing para transição ease-in-out
        }
    }
};
