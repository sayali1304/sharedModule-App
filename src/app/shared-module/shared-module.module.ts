import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    ServicesComponent,
    TeamComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModuleRoutingModule
  ]
})
export class SharedModuleModule { }
