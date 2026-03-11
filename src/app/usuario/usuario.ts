import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { USUARIOS, Usuario } from '../datos';

@Component({
  selector: 'app-usuario-detalle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="task-panel" *ngIf="usuario">
      <div class="panel-header">
        <h2>Tareas de {{ usuario.nombre }}</h2>
        <button class="btn-add" (click)="agregarTarea()">Agregar Tarea Nueva</button>
      </div>

      <div class="task-card" *ngFor="let tarea of tareas; let i = index">
        <h3>{{ tarea.titulo }}</h3>
        <span class="task-time">{{ tarea.tiempo }}</span>
        <p class="task-summary">{{ tarea.resumen }}</p>
        <button class="btn-done" (click)="terminarTarea(i)">Terminada</button>
      </div>
    </div>
  `,
  styles: [`
    .task-panel {
      background-color: #3b2d59;
      border-radius: 14px;
      padding: 24px;
    }

    .panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      margin-bottom: 20px;
      flex-wrap: nowrap;
    }

    .panel-header h2 {
      margin: 0;
      font-size: 17px;
      font-weight: 700;
      color: #eaddff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .btn-add {
      background-color: #7c3bbf;
      color: #ffffff;
      border: none;
      padding: 9px 16px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .task-card {
      background-color: #c19ee0;
      color: #2a1a3e;
      border-radius: 10px;
      padding: 20px 20px 64px;
      position: relative;
    }

    .task-card h3 {
      margin: 0 0 6px;
      font-size: 18px;
      font-weight: 800;
      text-transform: uppercase;
    }

    .task-time {
      display: block;
      font-size: 13px;
      margin-bottom: 12px;
      color: #4a2a6e;
      font-weight: 500;
    }

    .task-summary {
      margin: 0;
      font-size: 14px;
      color: #3a1f52;
      line-height: 1.5;
    }

    .btn-done {
      position: absolute;
      bottom: 16px;
      right: 16px;
      background-color: #3a1a6e;
      color: #ffffff;
      border: none;
      padding: 9px 24px;
      border-radius: 7px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 700;
    }
  `]
})
export class UsuarioDetalle implements OnInit {
  usuario?: Usuario;
  // Lista local para manejar las tareas en la vista
  tareas: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.usuario = USUARIOS.find(u => u.id === id);

      if (this.usuario) {
        // Cargamos las tareas del usuario o ponemos unas de ejemplo si no tiene
        this.tareas = (this.usuario as any).tareas || [
          { titulo: 'Revisar Pendientes', tiempo: '15 min', resumen: 'Verificar correos y mensajes.' },
          { titulo: 'Actualizar Estado', tiempo: '30 min', resumen: 'Sincronizar con el equipo.' }
        ];
      }
    });
  }

  agregarTarea(): void {
    // Lógica para agregar una tarea nueva (simulada)
    this.tareas.push({
      titulo: `Dominar angular ${this.tareas.length + 1}`,
      tiempo: '2026/03/2026',
      resumen: 'Descripción pendiente de editar...'
    });
  }

  terminarTarea(index: number): void {
    // Lógica para eliminar la tarea de la lista
    this.tareas.splice(index, 1);
  }
}
