/**
 * Created by panzhichao on 2016/9/30.
 */

import {Component, OnInit} from "@angular/core";
import {TopicsService} from '../services/topics';
import {Topics} from '../schemas/topics';
const timeago = require("timeago.js");


@Component({
  templateUrl: 'topics.component.html'
})
export class TopicsComponent implements OnInit {
  topics: Topics[];
  tab: string = '';
  page: number = 1;
  loading: boolean = true;
  timeagoInstance = new timeago();


  constructor(private topicsService: TopicsService) {

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
    return this.topicsService.getTopics(this.page, this.tab)
      .then(res=>res.json())
      .then(res=> {
        this.loading = false;
        return res.data
      })
  }

  onScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.loading) {
      ++this.page;
      this.fetchData().then(data=>this.topics = this.topics.concat(data))
    }
  }
}
