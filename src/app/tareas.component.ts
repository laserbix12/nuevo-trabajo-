import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="task-container" *ngIf="user">
      <h2>{{ user.name }}</h2>
    </div>
  `,
  styles: [`
    .task-container { color: white; padding: 10px 0; }
    h2 { margin-top: 0; font-size: 26px; font-weight: 700; }
  `]
})
export class TareasComponent {
  @Input() user!: any;
}
