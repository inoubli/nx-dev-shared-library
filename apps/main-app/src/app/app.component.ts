import { Component } from '@angular/core';

@Component({
  selector: 'front-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'main-app';

  items = [
    {
      name: 'Al Hassan',
      country: 'Guinia'
    },
    {
      name: 'Manu',
      country: 'France'
    },
    {
      name: 'Inoubli',
      country: 'Tunisia'
    }
  ]
}
