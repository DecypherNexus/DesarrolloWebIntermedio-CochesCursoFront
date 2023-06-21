import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';

@NgModule({
  declarations: [
    PortfolioComponent,
    HeaderNavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
