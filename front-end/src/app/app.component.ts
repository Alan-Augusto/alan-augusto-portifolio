import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import { MainHeaderComponent } from "./features/main-header/main-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private themeService = inject(ThemeService);

  ngOnInit() {
    this.themeService.initTheme();
  }

}
