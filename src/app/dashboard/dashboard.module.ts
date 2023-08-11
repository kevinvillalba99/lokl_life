import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { LandingmoduleModule } from '../home/landingmodule/landingmodule.module';
import { InversionCardComponent } from './components/inversion-card/inversion-card.component';
import { InversionCardsComponent } from './components/inversion-cards/inversion-cards.component';
import { ProjectViewComponent } from './components/project-view/project-view.component';
import { InvestmentsViewComponent } from './components/investments-view/investments-view.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    DashboardComponent,
    SideMenuComponent,
    InversionCardComponent,
    InversionCardsComponent,
    ProjectViewComponent,
    InvestmentsViewComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LandingmoduleModule,
    MaterialModule
  ]
})
export class DashboardModule { }
