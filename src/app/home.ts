import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from './encabezado.component';
import { UsuarioComponent } from './usuario.component';
import { TareasComponent } from './tareas.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EncabezadoComponent, UsuarioComponent, TareasComponent],
  template: `
    <div class="app-background">
      <app-encabezado></app-encabezado>

      <div class="main-layout">
        <aside class="sidebar">
          <app-usuario
            *ngFor="let u of users"
            [user]="u"
            [isSelected]="selectedUser.id === u.id"
            (click)="onSelectUser(u)">
          </app-usuario>
        </aside>

        <main class="content">
          <app-tareas [user]="selectedUser"></app-tareas>
        </main>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      background-color: #110c1c;
      margin: -8px;
    }
    .app-background {
      min-height: 100vh;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .main-layout {
      display: flex;
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 30px;
      gap: 60px;
    }
    .sidebar { width: 250px; }
    .content { flex: 1; }
  `]
})
export class Home {
  users = [
    { id: 1, name: 'Michaell Pulido', avatar: 'https://i.pravatar.cc/150?img=11' },
    { id: 2, name: 'Jhoana Saldaña', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 3, name: 'Gerardo Pulido', avatar: 'https://i.pravatar.cc/150?img=8' },
    { id: 4, name: 'Diego Pulido', avatar: 'https://i.pravatar.cc/150?img=3' }
  ];

  selectedUser = this.users[0];

  onSelectUser(user: any) {
    this.selectedUser = user;
  }
}
