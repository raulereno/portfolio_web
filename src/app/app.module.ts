import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/header/nav-bar/nav-bar.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/main/home/home.component';
import { AboutComponent } from './components/main/about/about.component';
import { ResumeComponent } from './components/main/resume/resume.component';
import { PortfolioComponent } from './components/main/portfolio/portfolio.component';
import { DetailProyectsComponent } from './components/main/portfolio/detail-proyects/detail-proyects.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    DetailProyectsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
