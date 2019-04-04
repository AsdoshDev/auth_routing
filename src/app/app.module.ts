/* Modules */
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';


/*Components*/

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


/* Services */

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DashboardModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : HttpInterceptorService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
