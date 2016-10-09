/**
 * Created by panzhichao on 2016/10/9.
 */

import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';
@Injectable()
export class TopicsService {
  constructor(private http: Http) {

  }

  getTopics(page: number, tab: string) {
    return this.http.get(`https://cnodejs.org/api/v1/topics?page=${page}&limit=40&tab=${tab}`)
      .timeout(3000, new Error('timeout exceeded'))
      .toPromise()
  }

  getTopic(id: string) {
    return this.http.get(`https://cnodejs.org/api/v1/topic/${id}?mdrender=false`)
      .timeout(3000, new Error('timeout exceeded'))
      .toPromise()
  }
}
