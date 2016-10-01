/**
 * Created by panzhichao on 2016/9/30.
 */

import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";
const timeago = require("timeago.js");

import 'rxjs/add/operator/toPromise';

@Component({
  templateUrl: 'topics.component.html'
})
export class TopicsComponent implements OnInit {
  topics: any;
  tab: string = '';
  page: number = 1;
  loading: boolean = true;
  timeagoInstance = new timeago();


  constructor(private http: Http) {

  }

  ngOnInit() {
    this.fetchData().then(data=>this.topics = data)
  }

  changeTab(tab: string) {
    this.page = 1;
    this.tab = tab;
    this.fetchData().then(data=>this.topics = data)
  }

  fetchData() {
    this.loading = true;
    return this.http.get(`https://cnodejs.org/api/v1/topics?page=${this.page}&limit=40&tab=${this.tab}`)
      .toPromise()
      .then(res=>res.json())
      .then(res=> {
        this.loading = false;
        return res.data
      })
  }

  onScroll() {
    if ((window.innerHeight + window.scrollY) > document.body.offsetHeight && !this.loading) {
      ++this.page;
      this.fetchData().then(data=>this.topics = this.topics.concat(data))
    }
  }
}
