// Define as propriedades básicas de um tema
export interface Theme {
    // Cores principais
    colors: {
        primary: string;
        secondary: string;
        background: string;
        text: string;
        accent?: string; // Cor adicional para destaques ou elementos especiais
    };

    // Tipografia
    typography: {
        fontFamily: string;
        fontSize: {
            heading: string; // Tamanho da fonte para títulos
            subheading: string; // Tamanho da fonte para subtítulos
            body: string; // Tamanho da fonte para o corpo do texto
            small: string; // Tamanho da fonte para textos pequenos
        };
        fontWeight: {
            regular: number; // Peso da fonte para texto regular
            bold: number; // Peso da fonte para texto em negrito
        };
    };

    // Espaçamento
    spacing: {
        small: string; // Espaçamento pequeno
        medium: string; // Espaçamento médio
        large: string; // Espaçamento grande
    };

    // Bordas
    borders: {
        radius: string; // Raio de borda para cantos arredondados
        width: string; // Largura da borda
        color: string; // Cor da borda
    };

    // Sombra
    shadows: {
        small: string; // Sombra pequena para elementos
        medium: string; // Sombra média para elementos
        large: string; // Sombra grande para elementos
    };

    // Tamanhos
    sizes: {
        container: string; // Largura do container principal
        maxWidth: string; // Largura máxima do layout
    };

    // Transições
    transitions: {
        duration: {
            short: string; // Duração curta para transições
            medium: string; // Duração média para transições
            long: string; // Duração longa para transições
        };
        easing: {
            easeIn: string; // Função de easing para transição ease-in
            easeOut: string; // Função de easing para transição ease-out
            easeInOut: string; // Função de easing para transição ease-in-out
        };
    };
}

export type ThemeOptions = 'light' | 'dark' 