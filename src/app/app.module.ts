import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FourohfourComponent } from './fourohfour/fourohfour.component';
import {RouterModule, Routes} from "@angular/router";
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {FormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {HttpClientModule} from "@angular/common/http";
import { PageLikeComponent } from './page-like/page-like.component';
import { FooterComponent } from './footer/footer.component';

const appRoute: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: '', component: InscriptionComponent },
  { path: 'pageLike', canActivate: [AuthGuardService], component: PageLikeComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'not-found', component: FourohfourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FourohfourComponent,
    AccueilComponent,
    InscriptionComponent,
    PageLikeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
