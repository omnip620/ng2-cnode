/**
 * Created by panzhichao on 2016/10/1.
 */

import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import * as moment from 'moment';
const hljs = require('highlight.js');

import 'rxjs/add/operator/toPromise';

@Component({
  templateUrl: 'topic.component.html'
})
export class TopicComponent implements OnInit {
  topic: any;
  id: string;
  loading: boolean = true;
  moment = moment;
  md = markdownit({
    html: true, linkify: true, typographer: true, breaks: true,
    highlight: function (str: any, lang: any) {
      console.log(lang, '-------')
      lang = 'javascript';

      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs"><code>' +
            hljs.highlight(lang, str, true).value +
            '</code></pre>';
        } catch (__) {}
      }

      return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
  });

  constructor(private http: Http, private route: ActivatedRoute, private location: Location) {

  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
      this.fetchData().then(data => {
        this.topic = data;

      })
    });
    console.log(hljs);
  }


  fetchData() {

    this.loading = true;
    return this.http.get(`https://cnodejs.org/api/v1/topic/${this.id}?mdrender=false`)
      .timeout(3000, new Error('timeout exceeded'))
      .toPromise()
      .then(res => res.json())
      .then(res => {
        this.loading = false;
        return res.data
      })
  }
}
