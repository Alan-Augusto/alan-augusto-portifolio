import { Component } from '@angular/core';
import { aboutMeData } from '../../../data/about-me.data';

@Component({
  selector: 'about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  data = aboutMeData;

  clickStack(complete:boolean, url:string|undefined) {
    if (complete && url) {
      window.location.href = url;
    }
  }

}
