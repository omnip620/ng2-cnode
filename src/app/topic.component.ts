/**
 * Created by panzhichao on 2016/10/1.
 */

import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {ActivatedRoute, Params} from '@angular/router';
import {Location}               from '@angular/common';
import * as moment from 'moment'

import 'rxjs/add/operator/toPromise';

@Component({
  templateUrl: 'topic.component.html'
})
export class TopicComponent implements OnInit {
  topic:any;
  id:string;
  loading:boolean = true;
  moment = moment;

  constructor(private http:Http, private route:ActivatedRoute, private location:Location) {

  }

  ngOnInit() {
    this.route.params.forEach((params:Params) => {
      this.id = params['id'];
      this.fetchData().then(data=>this.topic = data)
    });
  }


  fetchData() {
    this.loading = true;
    return this.http.get(`https://cnodejs.org/api/v1/topic/${this.id}`)
      .toPromise()
      .then(res=>res.json())
      .then(res=> {
        this.loading = false;
        return res.data
      })
  }
}
