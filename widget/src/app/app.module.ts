import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';

@NgModule({
  declarations: [
    WidgetComponent, // Declara el Widget
  ],
  imports: [BrowserModule],
  exports: [WidgetComponent], // Exporta el Widget
})
export class AppModule { }