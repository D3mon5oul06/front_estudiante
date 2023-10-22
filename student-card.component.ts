import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {
  @Input() nombre: string;
  @Input() carrera: string;
  @Input() campus: string;
  @Input() matricula: string;
  @Input() vigencia: string;
}
