import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'electronik';

  nom_bouton: string = 'Tout allumer';

  appareil_un = 'lave linge';
  appareil_deux = 'lave vaisselle';
  appareil_trois = 'chauffage';

  status_un = 'off';
  status_deux = 'off';
  status_trois = 'off';

  onAllumer(){
    this.status_un = 'on';
    this.status_deux = 'on';
    this.status_trois = 'on';
    this.nom_bouton = 'Tout eteindre';
  }

  onEteindre(){
    this.status_un = 'off';
    this.status_deux = 'off';
    this.status_trois = 'off';
    this.nom_bouton = 'Tout allumer';
  }

}
