import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  template: `
    <div class="header-wrapper">
      <header class="header-card">
        <div class="icon-circle">
          <img src="https://cdn-icons-png.flaticon.com/512/1055/1055644.png" alt="Icono" class="header-icon">
        </div>
        <h1>TAREA FACIL</h1>
        <p>Administrador de Tareas ADSO</p>
      </header>
    </div>
  `,
  styles: [`
    .header-wrapper {
      background-color: #0d0914; /* Mismo fondo de la página */
      padding: 50px 20px 0 20px;
      display: flex;
      justify-content: center;
      margin-bottom: 60px; /* Espacio antes de los usuarios */
    }
    .header-card {
      background-color: #3f1577; /* Morado profundo del encabezado */
      width: 100%;
      max-width: 900px; /* Ancho máximo para centrarlo bien */
      text-align: center;
      padding: 40px 20px 20px 20px;
      border-radius: 15px; /* Bordes redondeados en todas las esquinas */
      position: relative;
    }
    .icon-circle {
      position: absolute;
      top: -40px; /* Lo sube para que sobresalga de la tarjeta */
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 80px;
      background-color: #eaddff;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    }
    .header-icon {
      width: 45px;
      height: 45px;
      opacity: 0.9;
    }
    h1 {
      margin: 15px 0 5px 0;
      font-size: 26px;
      font-weight: 800;
      letter-spacing: 1px;
    }
    p {
      margin: 0;
      font-size: 14px;
      color: #d1c4e9;
    }
  `]
})
export class EncabezadoComponent {}
