import { Injectable, signal } from '@angular/core';
import { ThemeOptions } from '../models/theme.model';

/**
 * Serviço responsável por gerenciar o tema da aplicação.
 */
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  /**
   * O tema atual da aplicação.
   * É inicializado como 'light', mas pode ser alterado com base nas preferências do usuário.
   */
  theme = signal<'light' | 'dark'>('light');

  constructor() { }

  /**
   * Inicializa o tema da aplicação.
   * 
   * Este método verifica se há um tema salvo no localStorage e o aplica.
   * Caso não haja um tema salvo, verifica se o usuário tem preferência por um tema escuro (baseado em `prefers-color-scheme`).
   * Se o usuário preferir o tema escuro, ele será aplicado automaticamente.
   */
  initTheme(): void {
    if (typeof localStorage !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.setTheme(savedTheme as 'light' | 'dark');
      } else {
        const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (userPrefersDark) {
          this.setTheme('dark');
        }
      }
    }
  }

  /**
   * Obtém o tema atual da aplicação.
   * 
   * @returns O tema atual ('light' ou 'dark').
   */
  getTheme(): ThemeOptions {
    return this.theme();
  }

  /**
   * Alterna o tema da aplicação entre 'light' e 'dark'.
   * 
   * Se o tema atual for 'light', ele será alterado para 'dark' e vice-versa.
   */
  toggleTheme(): void {
    const newTheme = this.theme() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  /**
   * Define o tema da aplicação.
   * 
   * Este método atualiza a classe do elemento `body` com base no tema selecionado,
   * atualiza o valor do sinal `theme` e salva a preferência no `localStorage`.
   * 
   * @param theme O tema a ser aplicado ('light' ou 'dark').
   */
  setTheme(theme: 'light' | 'dark'): void {
    // Remove classes de tema anteriores
    document.body.classList.remove('light-theme', 'dark-theme');

    // Adiciona a classe de tema apropriada com base no tema selecionado
    document.body.classList.add(`${theme}-theme`);

    // Atualiza o sinal do tema
    this.theme.set(theme);

    // Armazena o tema selecionado no localStorage
    localStorage.setItem('theme', theme);
  }
}
