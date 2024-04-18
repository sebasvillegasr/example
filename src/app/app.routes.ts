import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SkateComponent } from './nav/skate/skate.component';
import { ScooterComponent } from './nav/scooter/scooter.component';
import { BodyComponent } from './body/body.component';
import { AccesoriesComponent } from './nav/accesories/accesories.component';
import { GiftCardComponent } from './nav/gift-card/gift-card.component';

export const routes: Routes = [
  {
    path: 'SkateBoards',
    component: SkateComponent
  },

  {
    path: 'EletricScooters',
    component: ScooterComponent
  },

  {
    path: 'home',
    component: BodyComponent

  },

  {
    path: 'accesories',
    component: AccesoriesComponent
  },

  {
    path: 'GiftCard',
    component: GiftCardComponent
  },


];

