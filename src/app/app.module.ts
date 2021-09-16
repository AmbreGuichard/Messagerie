import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { PersonnesActivesComponent } from './personnes-actives/personnes-actives.component';
import { ZoneDesMessagesComponent } from './zone-des-messages/zone-des-messages.component';
import { NouveauMessagesComponent } from './nouveau-messages/nouveau-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    PersonnesActivesComponent,
    ZoneDesMessagesComponent,
    NouveauMessagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
