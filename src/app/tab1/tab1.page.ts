import { Component } from '@angular/core';
import { IonFab, IonFabButton, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonIcon, IonButton, IonList, IonItem, IonAvatar } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add, peopleOutline,peopleSharp } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonFab, IonFabButton, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonIcon, IonButton, IonList, IonItem, IonAvatar],
})
export class Tab1Page {
    sihay=true

  constructor() {
    addIcons({
      'people-outline': peopleOutline,
      'people-sharp': peopleSharp,
      'add': add
    });
  }
    
  agregarColaborador(){
    console.log('Abrir pantalla de agregar colabolador');
  }
}
