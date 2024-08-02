import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwitchTripleComponent } from '../features-components/switch-triple/switch-triple.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SwitchTripleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Alan Augusto';
  currentTheme: 'light' | 'dark' | 'auto' = 'auto';

  ngOnInit() {
    // Inicializa o tema com base na preferência do usuário ou valor armazenado
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.setTheme(savedTheme as 'light' | 'dark' | 'auto' );
    } else {
      this.setTheme(this.currentTheme);
    }
  }

  toggleTheme() {
    if (this.currentTheme === 'light') {
      this.setTheme('dark');
    } else if (this.currentTheme === 'dark') {
      this.setTheme('auto');
    } else {
      this.setTheme('light');
    }
  }

  private setTheme(theme: 'light' | 'dark' | 'auto') {
    document.body.classList.remove('light-theme', 'dark-theme', 'auto-theme');
    if (theme === 'auto') {
      document.body.classList.add('auto-theme');
    } else if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.add('dark-theme');
    }
    this.currentTheme = theme;
    localStorage.setItem('theme', theme); // Salva a preferência do usuário
  }
}
