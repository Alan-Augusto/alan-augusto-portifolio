import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwitchTripleComponent } from './features-components/switch-triple/switch-triple.component';
import { ThemeService } from '../services/theme.service';
import { ThemeOptions } from '../models/theme.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SwitchTripleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private themeService = inject(ThemeService);

  title = 'Alan Augusto';
  currentTheme: 'light' | 'dark' | 'auto' = 'auto';

  ngOnInit() {
    // Inicializa o tema com base na preferência do usuário ou valor armazenado

  }
  setTheme(theme: ThemeOptions) {
    this.themeService.setTheme(theme);
  }
}
