import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemComponent } from './system.component';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { DashboardThemesTabComponent } from './dashboard/dashboard-themes-tab/dashboard-themes-tab.component';
import { DashboardLearnProcessTabComponent } from './dashboard/dashboard-learn-process-tab/dashboard-learn-process-tab.component';

const routes: Routes = [
  {
    path: 'system', component: SystemComponent,
    children: [
      {
        path: 'dashboard', component: DashboardPageComponent,
        children: [
          {
            path: 'dashboardThemesTab',
            component: DashboardThemesTabComponent
          },
          {
            path: 'dashboardLearnProcessTab',
            component: DashboardLearnProcessTabComponent
          }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {

}
