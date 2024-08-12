import { Component, computed, EventEmitter, inject, Output } from '@angular/core';
import { ThemeOptions } from '../../../models/theme.model';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'switch-triple',
  standalone: true,
  imports: [],
  templateUrl: './switch-triple.component.html',
  styleUrl: './switch-triple.component.scss'
})
export class SwitchTripleComponent {
  private themeService = inject(ThemeService);

  @Output() onChangeTheme: EventEmitter<any> = new EventEmitter();

  currentTheme = computed(() => {return this.themeService.getTheme() });

  chanegTheme(theme: ThemeOptions) {
    this.onChangeTheme.emit(theme);
  }


}
