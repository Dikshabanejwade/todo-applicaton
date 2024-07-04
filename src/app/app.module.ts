import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TestpipePipe } from './pipes/testpipe.pipe';
import { TestdirectivesDirective } from './testdirectives.directive';
import { TestdirectiveDirective } from './testdirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestpipePipe,
    TestdirectivesDirective,
    TestdirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
