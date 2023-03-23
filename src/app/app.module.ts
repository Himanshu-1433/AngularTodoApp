import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MyComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MyComponent]
})
export class AppModule { }
