import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalInterceptorInterceptor } from './global-interceptor.interceptor';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { FiltersComponent } from './components/filters/filters.component';
import { ResultsComponent } from './components/results/results.component';
import { TechnicalDocumentCardComponent } from './components/technical-document-card/technical-document-card.component';
import { TechnicalBulletinCardComponent } from './components/technical-bulletin-card/technical-bulletin-card.component';
import { FittingInstructionsCardComponent } from './components/fitting-instructions-card/fitting-instructions-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FiltersComponent,
    ResultsComponent,
    TechnicalDocumentCardComponent,
    TechnicalBulletinCardComponent,
    FittingInstructionsCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDividerModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatChipsModule,
    ClipboardModule,
    ScrollingModule,
    MatExpansionModule,
    MatListModule,
    NgxSpinnerModule,
    ToastrModule.forRoot()
  ],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: GlobalInterceptorInterceptor, multi: true  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
