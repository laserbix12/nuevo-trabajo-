import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Task {
  id: number;
  title: string;
  time: string;
  summary: string;
  done?: boolean;
}

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="task-panel" *ngIf="user">
      <div class="panel-header">
        <h2>{{ user.name }}</h2>
        <button class="btn-add" (click)="addTask()">+ Agregar Tarea</button>
      </div>

      <div class="task-list" *ngIf="tasks.length > 0; else noTasks">
        <div class="task-card" *ngFor="let task of tasks" [class.done]="task.done">
          <h3>{{ task.title }}</h3>
          <span class="task-time">{{ task.time }}</span>
          <p class="task-summary">{{ task.summary }}</p>
          <button class="btn-done" (click)="markDone(task)">
            {{ task.done ? '✓ LISTO' : 'LISTO' }}
          </button>
        </div>
      </div>

      <ng-template #noTasks>
        <p class="no-tasks">No hay tareas asignadas.</p>
      </ng-template>
    </div>
  `,
  styles: [`
    .task-panel {
      background-color: #3b2d59;
      border-radius: 14px;
      padding: 28px;
      min-height: 300px;
    }

    .panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }

    .panel-header h2 {
      margin: 0;
      font-size: 22px;
      font-weight: 700;
      color: #eaddff;
    }

    .btn-add {
      background-color: #9c51e0;
      color: #ffffff;
      border: none;
      padding: 10px 22px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 700;
      transition: background 0.2s ease;
    }

    .btn-add:hover {
      background-color: #7c3bbf;
    }

    .task-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .task-card {
      background-color: #c19ee0;
      color: #2a1a3e;
      border-radius: 10px;
      padding: 22px 20px 60px 20px;
      position: relative;
      transition: opacity 0.3s;
    }

    .task-card.done {
      opacity: 0.55;
    }

    .task-card h3 {
      margin: 0 0 6px;
      font-size: 20px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .task-time {
      display: block;
      font-size: 13px;
      margin-bottom: 14px;
      color: #5a3e7a;
      font-weight: 600;
    }

    .task-summary {
      margin: 0;
      font-size: 14px;
      color: #3d2855;
      line-height: 1.5;
    }

    .btn-done {
      position: absolute;
      bottom: 18px;
      right: 18px;
      background-color: #3a166a;
      color: #ffffff;
      border: none;
      padding: 9px 28px;
      border-radius: 7px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 700;
      transition: background 0.2s ease;
      letter-spacing: 0.5px;
    }

    .btn-done:hover {
      background-color: #55238f;
    }

    .no-tasks {
      color: #b39ddb;
      font-size: 15px;
      text-align: center;
      margin-top: 40px;
    }
  `]
})
export class TareasComponent implements OnChanges {
  @Input() user!: any;
  @Input() allTasks: Record<number, Task[]> = {};

  tasks: Task[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user'] || changes['allTasks']) {
      this.tasks = this.user && this.allTasks[this.user.id]
        ? [...this.allTasks[this.user.id]]
        : [];
    }
  }

  addTask(): void {
    const newId = this.tasks.length
      ? Math.max(...this.tasks.map(t => t.id)) + 1
      : 1;
    this.tasks.push({
      id: newId,
      title: 'NUEVA TAREA',
      time: 'Sin fecha límite',
      summary: 'Descripción de la nueva tarea pendiente.',
      done: false
    });
  }

  markDone(task: Task): void {
    task.done = !task.done;
  }
}
