import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectViewComponent } from './components/project-view/project-view.component';
import { InvestmentsViewComponent } from './components/investments-view/investments-view.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: InvestmentsViewComponent
      },
      {
        path: ':lokl_id',
        component: ProjectViewComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
