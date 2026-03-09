import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { USUARIOS, Usuario } from './datos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <!-- ENCABEZADO -->
    <div class="header-wrapper">
      <header class="header-card">
        <div class="icon-circle">
          <img src="https://cdn-icons-png.flaticon.com/512/1055/1055644.png" alt="Icono" class="header-icon">
        </div>
        <h1>TAREA FACIL</h1>
        <p>Administrador de Tareas ADSO</p>
      </header>
    </div>

    <!-- MAIN LAYOUT -->
    <div class="main-layout">

      <!-- SIDEBAR USUARIOS -->
      <aside class="sidebar">
        <a
          *ngFor="let u of usuarios"
          class="user-card"
          [routerLink]="['/usuario', u.id]"
          routerLinkActive="active">
          <img [src]="u.avatar" [alt]="u.nombre" class="avatar">
          <span class="user-name">{{ u.nombre }}</span>
        </a>
      </aside>

      <!-- CONTENIDO (panel de tareas del usuario seleccionado) -->
      <main class="content">
        <router-outlet></router-outlet>
      </main>

    </div>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      background-color: #0d0914;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: #ffffff;
    }

    /* ── HEADER ── */
    .header-wrapper {
      background-color: #0d0914;
      padding: 50px 20px 0;
      display: flex;
      justify-content: center;
      margin-bottom: 50px;
    }

    .header-card {
      background-color: #3f1577;
      width: 100%;
      max-width: 900px;
      text-align: center;
      padding: 40px 20px 20px;
      border-radius: 14px;
      position: relative;
    }

    .icon-circle {
      position: absolute;
      top: -38px;
      left: 50%;
      transform: translateX(-50%);
      width: 76px;
      height: 76px;
      background-color: #eaddff;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    }

    .header-icon { width: 42px; height: 42px; }

    .header-card h1 {
      margin: 12px 0 4px;
      font-size: 26px;
      font-weight: 800;
      letter-spacing: 1.5px;
      color: #ffffff;
    }

    .header-card p { margin: 0; font-size: 13px; color: #d1c4e9; }

    /* ── MAIN LAYOUT ── */
    .main-layout {
      display: flex;
      max-width: 900px;
      margin: 0 auto;
      padding: 0 20px 40px;
      gap: 30px;
    }

    /* ── SIDEBAR ── */
    .sidebar {
      width: 200px;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .user-card {
      display: flex;
      align-items: center;
      background-color: #2e1f4a;
      padding: 9px 13px;
      border-radius: 10px;
      cursor: pointer;
      text-decoration: none;
      transition: background 0.2s;
    }

    .user-card:hover { background-color: #3a2760; }

    .user-card.active { background-color: #4a2d7a; }

    .avatar {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 12px;
      flex-shrink: 0;
    }

    .user-name { font-size: 13px; font-weight: 500; color: #eaddff; }

    /* ── CONTENT ── */
    .content { flex: 1; }
  `]
})
export class Home {
  usuarios: Usuario[] = USUARIOS;
}
