import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
{ path: "", component: HomeComponent },
{ path: "header", component: HeaderComponent },
{ path: "home", component: HomeComponent },
{ path: "about", component: AboutusComponent },
{ path: "products", component: ProductsComponent },
{ path: "services", component: ServicesComponent },
{ path: "team", component: TeamComponent },
{ path: "footer", component: FooterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedModuleRoutingModule { }
