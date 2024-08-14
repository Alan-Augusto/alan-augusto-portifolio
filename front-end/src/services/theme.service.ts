import { Injectable, signal } from '@angular/core';
import { ThemeOptions } from '../models/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  theme = signal<'light' | 'dark' >('light');

  getTheme() :ThemeOptions {
    // const savedTheme = localStorage?.getItem('theme');
    // if (savedTheme) {
    //   this.theme.set(savedTheme as 'light' | 'dark' | 'auto' );
    // }
    return this.theme();
  }

  toggleTheme() {
    if (this.theme() === 'light') {
      this.setTheme('dark');
    }
    else {
      this.setTheme('light');
    }

  }

  setTheme(theme: 'light' | 'dark') {
    document.body.classList.remove('light-theme', 'dark-theme', 'auto-theme');
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } 
    else {
      document.body.classList.add('dark-theme');
    }
    
    this.theme.set(theme);
    localStorage.setItem('theme', theme);
  }
}
