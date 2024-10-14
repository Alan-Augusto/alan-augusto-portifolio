/**
 * Interface que representa um modelo de experiência profissional.
 *
 * @interface ExperiencesModel
 * 
 * @property {string} companyName - Nome da empresa onde a experiência foi adquirida.
 * @property {string} role - Cargo ou função desempenhada na empresa.
 * @property {Date} startDate - Data de início da experiência.
 * @property {Date} [endDate] - Data de término da experiência (opcional).
 * @property {string} description - Descrição das atividades e responsabilidades desempenhadas.
 */
export interface ExperiencesModel {
    companyName: string;
    role: string;
    startDate: string;
    endDate?: string;
    description: string;
    stacks: number[];
}