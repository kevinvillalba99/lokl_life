import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { LandingmoduleModule } from '../home/landingmodule/landingmodule.module';


@NgModule({
  declarations: [
    DashboardComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LandingmoduleModule
  ]
})
export class DashboardModule { }
