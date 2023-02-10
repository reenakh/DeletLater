import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WasteComponent } from './waste/waste.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './shared/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    WasteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
