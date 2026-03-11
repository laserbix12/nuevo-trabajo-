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
export class App {
  usuarios: Usuario[] = [
    { id: 1, nombre: 'Michaell Pulido', foto: 'assets/user1.png', tarea: 'Dominar Angular', desc: 'Aprender todas las características básicas y avanzadas de Angular y cómo aplicarlas.' },
    { id: 2, nombre: 'Karen Montoya', foto: 'assets/user2.png', tarea: 'Diseño de Interfaces', desc: 'Crear prototipos en alta fidelidad para el proyecto ADSO.' },
    { id: 3, nombre: 'Adres Pulido', foto: 'assets/user3.png', tarea: 'Lógica de Negocio', desc: 'Implementar los servicios necesarios para la gestión de datos.' },
    { id: 4, nombre: 'Gerardo Pulido', foto: 'assets/user4.png', tarea: 'Base de Datos', desc: 'Optimizar las consultas y asegurar la integridad de la información.' },
    { id: 5, nombre: 'Andresito Pulido', foto: 'assets/user5.png', tarea: 'Pruebas Unitarias', desc: 'Verificar el correcto funcionamiento de cada componente.' }
  ];

  usuarioSeleccionado: Usuario = this.usuarios[0];

  seleccionar(u: Usuario) {
    this.usuarioSeleccionado = u;
  }
}
