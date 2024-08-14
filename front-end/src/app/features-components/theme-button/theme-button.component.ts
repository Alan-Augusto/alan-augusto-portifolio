import { Component, computed, inject } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'theme-button',
  standalone: true,
  imports: [],
  templateUrl: './theme-button.component.html',
  styleUrl: './theme-button.component.scss'
})
export class ThemeButtonComponent {

  private themeService = inject(ThemeService)

  currentTheme = computed(()=>this.themeService.getTheme())

  toggleTheme(){
    this.themeService.toggleTheme();
  }

}
