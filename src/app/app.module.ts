import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './first/second/second.component';
import { DirectiveDirective } from './first/directive.directive';
import { WrapperModule } from './wrapper/wrapper.module';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    DirectiveDirective

  ],
  imports: [
    BrowserModule,
    WrapperModule
  
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
