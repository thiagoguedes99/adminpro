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
    }
  ];

  constructor() { }

}
