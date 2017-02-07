import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/*Components*/
import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import { KartlistComponent } from './kartlist/kartlist.component';

/*Services*/
import {CommonService} from './Shared/common.service';
import {KartService} from './Shared/kart.service';

//routing
import {routing}  from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    KartlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [CommonService,KartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
