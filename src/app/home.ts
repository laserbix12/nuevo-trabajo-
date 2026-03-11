import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Usuario, UsuarioService } from './usuario.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="main-container">
      <header>
        <h1>TAREA FACIL</h1>
        <p>Administrador de Tareas ADSO</p>
      </header>

      <div class="body-content">
        <aside id="sidebar">
          @for (usuario of usuarios; track usuario.id) {
            <div
              class="user"
              [routerLink]="['/usuario', usuario.id]"
              routerLinkActive="active">
              <div class="avatar">{{ usuario.ini }}</div>
              <span>{{ usuario.nombre }}</span>
            </div>
          }
        </aside>
        <main>
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class Home {
  usuarios: Usuario[] = [];
  constructor(private usuarioService: UsuarioService) {
    this.usuarios = this.usuarioService.getUsuarios();
  }
}
