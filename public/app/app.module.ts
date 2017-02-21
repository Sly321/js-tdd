import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/** Components */
import { Content } from './components/content/content.component';

/** Services */
import { Service } from './services/service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ Content ],
  bootstrap:    [ Content ],
  providers:    [ Service ]
})
export class AppModule { }
