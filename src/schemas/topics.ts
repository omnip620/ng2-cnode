/**
 * Created by panzhichao on 2016/10/9.
 */


export class Topics {
  constructor(public id: string,
              public author_id: string,
              public tab: string,
              public content: string,
              public title: string,
              public last_reply_at: string,
              public good: boolean,
              public top: boolean,
              public reply_count: number,
              public visit_count: number,
              public create_at: string,
              public author: Author) {
  }
}

export class Topic {
  constructor(public id: string,
              public author_id: string,
              public tab: string,
              public content: string,
              public title: string,
              public last_reply_at: string,
              public good: boolean,
              public top: boolean,
              public reply_count: number,
              public visit_count: number,
              public create_at: string,
              public replies: Reply[]) {
  }
}

export class Author {
  constructor(public loginname: string, public avatar_url: string) {
  }
}

export class Reply {
  constructor(public id: string,
              public author: Author,
              public content: string,
              public ups: string[],
              public create_at: string,
              public reply_id: string) {
  }
}
