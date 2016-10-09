import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {routing} from "./app.routing";
import {TopicsComponent} from "./topics.component";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {TabPipe} from "../pipes/tab";
import {TopicComponent} from "./topic.component";
import {TopicsService} from "../services/topics";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    TopicsComponent,
    TopicComponent,
    TabPipe
  ],
  providers: [TopicsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
