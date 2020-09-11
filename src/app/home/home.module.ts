import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AboutComponent, ContactComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
