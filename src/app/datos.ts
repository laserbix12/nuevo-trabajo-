export interface Usuario {
  id: number;
  nombre: string;
  avatar: string;
}

export const USUARIOS: Usuario[] = [
  { id: 1, nombre: 'Mischaell Pulido', avatar: 'https://i.pravatar.cc/45?u=mischaell' },
  { id: 2, nombre: 'karen Montoya',   avatar: 'https://i.pravatar.cc/45?u=gerardo'   },
  { id: 3, nombre: 'Michell Jhoana',   avatar: 'https://i.pravatar.cc/45?u=michell'   },
  { id: 4, nombre: 'Andres Camelo',    avatar: 'https://i.pravatar.cc/45?u=andrea'    },
  { id: 5, nombre: 'Brandon Pulido',   avatar: 'https://i.pravatar.cc/45?u=brandon'   },
  { id: 6, nombre: 'Katerin Montoya',  avatar: 'https://i.pravatar.cc/45?u=katerin'   },
];
