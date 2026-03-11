import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Usuario, UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-detalle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    @if (usuario) {
      <div class="top">
        <h2 id="titulo">Tareas de {{ usuario.nombre }}</h2>
        <button class="add" (click)="abrirModal()">Agregar Tarea Nueva</button>
      </div>

      <div id="tareas">
        @for (tarea of usuario.tareas; track $index) {
          <div class="card">
            <h3>{{ tarea.titulo }}</h3>
            <div class="date">{{ tarea.fecha }}</div>
            <p>{{ tarea.desc }}</p>
            <div class="footer">
              <button [class]="tarea.hecha ? 'btn-done' : 'btn-pending'" (click)="toggle($index)">
                {{ tarea.hecha ? 'Terminada' : 'Pendiente' }}
              </button>
            </div>
          </div>
        } @empty {
          <p style="color:#c4b5fd;margin-top:20px">No hay tareas. ¡Agrega una nueva!</p>
        }
      </div>

      <!-- Modal -->
      @if (modalAbierto) {
        <div class="modal-bg open" (click)="cerrarModalBackground($event)">
          <div class="modal">
            <h3>Nueva Tarea</h3>
            <label>Título</label>
            <input type="text" [(ngModel)]="nuevaTarea.titulo" placeholder="Título de la tarea"/>
            <label>Fecha</label>
            <input type="date" [(ngModel)]="nuevaTarea.fecha"/>
            <label>Descripción</label>
            <textarea [(ngModel)]="nuevaTarea.desc" placeholder="Descripción..."></textarea>
            <div class="modal-btns">
              <button class="btn-cancel" (click)="cerrarModal()">Cancelar</button>
              <button class="btn-save" (click)="guardar()">Guardar</button>
            </div>
          </div>
        </div>
      }
    }
  `,
  styleUrls: ['../app.component.css']
})
export class UsuarioDetalle implements OnInit {
  usuario: Usuario | undefined;
  modalAbierto = false;
  nuevaTarea = { titulo: '', fecha: new Date().toISOString().split('T')[0], desc: '' };

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.usuario = this.usuarioService.getUsuario(id);
      this.cerrarModal();
    });
  }

  toggle(index: number) {
    if (this.usuario) this.usuarioService.toggleTarea(this.usuario.id, index);
  }

  abrirModal() { this.modalAbierto = true; }

  cerrarModal() {
    this.modalAbierto = false;
    this.nuevaTarea = { titulo: '', fecha: new Date().toISOString().split('T')[0], desc: '' };
  }

  cerrarModalBackground(event: Event) {
    if (event.target === event.currentTarget) {
      this.cerrarModal();
    }
  }

  guardar() {
    if (!this.nuevaTarea.titulo.trim()) return alert('Escribe un título');
    if (this.usuario) {
      this.usuarioService.addTarea(this.usuario.id, this.nuevaTarea);
      this.cerrarModal();
    }
  }
}
