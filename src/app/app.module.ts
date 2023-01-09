import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DirectivesModule } from './directives/directives.module';
import { NgIfComponent } from './directives/ng-if/ng-if.component';
import { NgForComponent } from './directives/ng-for/ng-for.component';
import { NgSwitchComponent } from './directives/ng-switch/ng-switch.component';

@NgModule({
  imports: [BrowserModule, FormsModule, DirectivesModule],
  declarations: [AppComponent, HelloComponent,NgIfComponent,NgForComponent,NgSwitchComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
