/**
 * Created by panzhichao on 2016/9/30.
 */

import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TopicsComponent} from "./topics.component";
import {TopicComponent} from "./topic.component";
import {UserComponent} from "./user.component";

const appRoutes: Routes = [
  {
    path: '',
    component: TopicsComponent
  }, {
    path: 'topic/:id',
    component: TopicComponent
  }, {
    path: 'user/:id',
    component: UserComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
