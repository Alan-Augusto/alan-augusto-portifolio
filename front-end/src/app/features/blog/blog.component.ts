import { Component, inject } from '@angular/core';
import { HeaderService } from '../../../services/header.service';

@Component({
  selector: 'blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

  private headerService = inject(HeaderService);

  ngOnInit() {
    this.headerService.visible = true;
  }
}
