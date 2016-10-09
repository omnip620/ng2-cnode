/**
 * Created by panzhichao on 2016/10/1.
 */

import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import * as moment from 'moment';
import {TopicsService} from "../services/topics";
import {Topic} from '../schemas/topics'
const hljs = require('highlight.js');

@Component({
  templateUrl: 'topic.component.html'
})
export class TopicComponent implements OnInit {
  topic: Topic;
  id: string;
  loading: boolean = true;
  moment = moment;
  md = markdownit({
    html: true, linkify: true, typographer: true, breaks: true,
    highlight: function (str: any, lang: any) {

      try {
        return '<pre class="hljs"><code>' +
          hljs.highlightAuto(str).value +
          '</code></pre>';
      } catch (__) {
      }


      return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
  });

  constructor(private topicsService: TopicsService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
      this.fetchData().then((data: Topic) => this.topic = data)
    });
  }


  fetchData() {
    this.loading = true;
    return this.topicsService.getTopic(this.id)
      .then(res => res.json())
      .then(res => {
        this.loading = false;
        return res.data
      })
  }
}
