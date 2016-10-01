/**
 * Created by panzhichao on 2016/10/1.
 */
import {Pipe, PipeTransform} from '@angular/core';


@Pipe({name: 'tab'})
export class TabPipe implements PipeTransform {
  tabMap = {all: '全部', share: '分享', ask: '问答', job: '招聘'};

  transform(tab: string, good: boolean, top: boolean): string {
    return top ? '置顶' : good ? '精华' : this.tabMap[tab];
  }
}
