import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRefresherContent, IonRefresher, RefresherCustomEvent } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonRefresherContent, IonRefresher],
})
export class Tab3Page {
  constructor() {}
    handleRefresh(event: RefresherCustomEvent) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
} 
  
