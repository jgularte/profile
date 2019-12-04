import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {PdfViewerComponent, PdfViewerModule} from 'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';
import {PdfContainerComponent} from './pdf-container/pdf-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PdfContainerComponent
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
