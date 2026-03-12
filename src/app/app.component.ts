import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Tarea {
  id: number;
  titulo: string;
  desc: string;
  fecha: string;
}

export interface Usuario {
  id: number;
  nombre: string;
  foto: string;
  tareas: Tarea[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuarios: Usuario[] = [
    { id: 1, nombre: 'Michaell Pulido', foto: 'https://i.pravatar.cc/150?u=1', tareas: [
      { id: 1, titulo: 'Dominar Angular', desc: 'Aprender todas las características básicas y avanzadas de Angular y cómo aplicarlas.', fecha: '2026-04-14' }
    ]},
    { id: 2, nombre: 'Karen Montoya', foto: 'https://i.pravatar.cc/150?u=2', tareas: [
      { id: 2, titulo: 'Diseño de Interfaces', desc: 'Crear prototipos en alta fidelidad siguiendo la paleta de colores morados.', fecha: '2026-04-15' }
    ]},
    { id: 3, nombre: 'Adres Pulido', foto: 'https://i.pravatar.cc/150?u=3', tareas: [
      { id: 3, titulo: 'Lógica de Servicios', desc: 'Implementar la comunicación entre componentes mediante servicios de Angular.', fecha: '2026-04-16' }
    ]},
    { id: 4, nombre: 'Gerardo Pulido', foto: 'https://i.pravatar.cc/150?u=4', tareas: [
      { id: 4, titulo: 'Base de Datos ADSO', desc: 'Configurar la persistencia de datos para las tareas del administrador.', fecha: '2026-04-17' }
    ]},
    { id: 5, nombre: 'Andresito Pulido', foto: 'https://i.pravatar.cc/150?u=5', tareas: [
      { id: 5, titulo: 'Pruebas Unitarias', desc: 'Asegurar que el cambio de usuario funcione correctamente sin errores.', fecha: '2026-04-18' }
    ]}
  ];

  usuarioSeleccionado: Usuario = this.usuarios[0];

  mostrarModal = false;
  nuevaTarea = {
    titulo: '',
    desc: '',
    fecha: ''
  };

  seleccionar(u: Usuario) {
    this.usuarioSeleccionado = u;
  }

  abrirModal() {
    this.nuevaTarea = { titulo: '', desc: '', fecha: new Date().toISOString().split('T')[0] };
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  agregarTarea() {
    if (this.nuevaTarea.titulo.trim() === '' || this.nuevaTarea.desc.trim() === '') {
      return; // Validación básica
    }
    const nueva: Tarea = {
      id: Date.now(),
      titulo: this.nuevaTarea.titulo,
      desc: this.nuevaTarea.desc,
      fecha: this.nuevaTarea.fecha
    };
    this.usuarioSeleccionado.tareas.push(nueva);
    this.cerrarModal();
  }

  terminarTarea(tareaId: number) {
    this.usuarioSeleccionado.tareas = this.usuarioSeleccionado.tareas.filter(t => t.id !== tareaId);
  }
}
