import {Component, OnInit} from '@angular/core';
import '../../public/css/style.styl';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    console.log('hahaha')
  }


}
