import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Usuario {
  id: number;
  nombre: string;
  foto: string;
  tarea: string;
  desc: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuarios: Usuario[] = [
    { id: 1, nombre: 'Michaell Pulido', foto: 'https://i.pravatar.cc/150?u=1', tarea: 'Dominar Angular', desc: 'Aprender todas las características básicas y avanzadas de Angular y cómo aplicarlas.' },
    { id: 2, nombre: 'Karen Montoya', foto: 'https://i.pravatar.cc/150?u=2', tarea: 'Diseño de Interfaces', desc: 'Crear prototipos en alta fidelidad siguiendo la paleta de colores morados.' },
    { id: 3, nombre: 'Adres Pulido', foto: 'https://i.pravatar.cc/150?u=3', tarea: 'Lógica de Servicios', desc: 'Implementar la comunicación entre componentes mediante servicios de Angular.' },
    { id: 4, nombre: 'Gerardo Pulido', foto: 'https://i.pravatar.cc/150?u=4', tarea: 'Base de Datos ADSO', desc: 'Configurar la persistencia de datos para las tareas del administrador.' },
    { id: 5, nombre: 'Andresito Pulido', foto: 'https://i.pravatar.cc/150?u=5', tarea: 'Pruebas Unitarias', desc: 'Asegurar que el cambio de usuario funcione correctamente sin errores.' }
  ];

  usuarioSeleccionado: Usuario = this.usuarios[0];

  seleccionar(u: Usuario) {
    this.usuarioSeleccionado = u;
  }
}
