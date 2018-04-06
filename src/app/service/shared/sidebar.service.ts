import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  public menu: any = [
    {
      titulo: 'Principal',
      icone: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Dashboard', url: '/dashboard'},
        {titulo: 'ProgressBar', url: '/progress'},
        {titulo: 'Graficas', url: '/graficas1'},
        {titulo: 'promessas', url: '/promessas'},
        {titulo: 'rxjs', url: '/rxjs'},
      ]
    },
    {
      titulo: 'mantenimientos',
      icone: 'mdi mdi-folder-lock-open',
      submenu: [
        {titulo: 'Usuários', url: '/usuarios'},
        {titulo: 'Hospitais', url: '/hospitais'},
        {titulo: 'Médicos.', url: '/medicos'},
      ]
    }
  ];

  constructor() { }

}
