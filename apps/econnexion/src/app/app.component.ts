import { Component } from '@angular/core';

@Component({
  selector: 'front-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dynamic title';

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
