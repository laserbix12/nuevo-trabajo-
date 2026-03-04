import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="user-card" [ngClass]="{'active': isSelected}">
      <img [src]="user.avatar" alt="Avatar" class="avatar">
      <span class="user-name">{{ user.name }}</span>
    </div>
  `,
  styles: [`
    .user-card {
      display: flex;
      align-items: center;
      background-color: #3b2d59; /* Morado grisáceo */
      padding: 10px 15px;
      border-radius: 10px;
      margin-bottom: 12px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .user-card:hover {
      background-color: #4a396e;
    }
    .user-card.active {
      background-color: #55338d; /* Resalta si está seleccionado */
    }
    .avatar {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 15px;
      border: 2px solid transparent;
    }
    .user-name {
      font-size: 15px;
      font-weight: 500;
      color: #eaddff;
    }
  `]
})
export class UsuarioComponent {
  @Input() user!: any;
  @Input() isSelected: boolean = false;
}
