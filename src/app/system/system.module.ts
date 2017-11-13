import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { FooterComponent } from './shared/component/footer/footer.component';
import { SidebarComponent } from './shared/component/sidebar/sidebar.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { SystemComponent } from './system.component';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { DashboardLearnProcessTabComponent } from './dashboard/dashboard-learn-process-tab/dashboard-learn-process-tab.component';
import { DashboardThemesTabComponent } from './dashboard/dashboard-themes-tab/dashboard-themes-tab.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ],
  declarations: [
    SystemComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardPageComponent,
    DashboardLearnProcessTabComponent,
    DashboardThemesTabComponent
  ]
})

export class SystemModule {
}
