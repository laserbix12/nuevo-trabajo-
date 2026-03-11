import { Routes } from '@angular/router';
import { Home } from './home';
import { UsuarioDetalle } from './usuario/usuario';
import { AcercaComponent } from './acerca.component';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    children: [
      { path: 'usuario/:id', component: UsuarioDetalle },
      {
        path: 'acerca-de',
        component: AcercaComponent
      },
      { path: '', redirectTo: 'usuario/1', pathMatch: 'full' },
    ]
  },
];
