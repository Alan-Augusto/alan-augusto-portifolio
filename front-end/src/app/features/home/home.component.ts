import { Component, inject } from '@angular/core';
import { AboutMeComponent } from "../../features-components/about-me/about-me.component";
import { HeaderService } from '../../../services/header.service';
import { ExperiencesComponent } from "../../features-components/experiences/experiences.component";

@Component({
  selector: 'home',
  standalone: true,
  imports: [AboutMeComponent, ExperiencesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private headerService = inject(HeaderService);

  ngOnInit() {
    this.headerService.visible = false;
  }

}
