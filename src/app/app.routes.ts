import { Routes } from '@angular/router';
import { Home } from './home';
import { UsuarioDetalle } from './usuario/usuario';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    children: [
      { path: 'usuario/:id', component: UsuarioDetalle },
      { path: '', redirectTo: 'usuario/1', pathMatch: 'full' },
    ]
  },
];
