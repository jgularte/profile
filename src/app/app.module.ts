import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { PdfContainerComponent } from './pdf-container/pdf-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PdfContainerComponent,
  ],
  imports: [
    BrowserModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
