import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { SystemRoutingModule } from './system-routing.module';
import { FooterComponent } from './shared/component/footer/footer.component';
import { SidebarComponent } from './shared/component/sidebar/sidebar.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { SystemComponent } from './system.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ],
  declarations: [
    SystemComponent,
    DashboardPageComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent
  ]
})

export class SystemModule {
}
