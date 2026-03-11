import { Injectable } from '@angular/core';

export interface Tarea {
  titulo: string;
  fecha: string;
  desc: string;
  hecha: boolean;
}

export interface Usuario {
  id: number;
  nombre:string;
  ini: string;
  tareas: Tarea[];
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios: Usuario[] = [
    { id: 1, nombre: 'Antonia Céspedes', ini: 'AC',
      tareas: [{ titulo: 'Dominar Angular', fecha: '2026-04-14', desc: 'Aprender todas las características básicas y avanzadas de Angular.', hecha: true }] },
    { id: 2, nombre: 'Emilia Torres',     ini: 'ET', tareas: [] },
    { id: 3, nombre: 'Marcos Jeremías',   ini: 'MJ', tareas: [] },
    { id: 4, nombre: 'David Mercado',     ini: 'DM', tareas: [] },
    { id: 5, nombre: 'Pamela Chan',       ini: 'PC', tareas: [] },
    { id: 6, nombre: 'Adrián Serbia',     ini: 'AS', tareas: [] }
  ];

  getUsuarios = () => this.usuarios;
  getUsuario = (id: number) => this.usuarios.find(u => u.id === id);

  addTarea(usuarioId: number, tarea: Omit<Tarea, 'hecha'>) {
    this.getUsuario(usuarioId)?.tareas.push({ ...tarea, hecha: false });
  }

  toggleTarea(usuarioId: number, tareaIndex: number) {
    const tarea = this.getUsuario(usuarioId)?.tareas[tareaIndex];
    if (tarea) tarea.hecha = !tarea.hecha;
  }
}
