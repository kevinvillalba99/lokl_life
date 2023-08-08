import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { LandingmoduleModule } from '../home/landingmodule/landingmodule.module';
import { InversionCardComponent } from './components/inversion-card/inversion-card.component';
import { InversionCardsComponent } from './components/inversion-cards/inversion-cards.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SideMenuComponent,
    InversionCardComponent,
    InversionCardsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LandingmoduleModule
  ]
})
export class DashboardModule { }
