import { Component } from '@angular/core';
import { experiencesData } from '../../../data/experiences.data';
import { stacks } from '../../../data/stack.data';

@Component({
  selector: 'experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  data = experiencesData

  stacks = stacks

  getStack(id:number) {
    console.log(this.stacks)
    return this.stacks.find(stack => stack.id === id)
  }

}
