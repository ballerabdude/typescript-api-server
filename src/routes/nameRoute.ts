/// <reference path="../../typings/node/node.d.ts" />
/// <reference path="../../typings/hapi/hapi.d.ts" />

import Hapi = require('hapi');


export interface IBaseRoute {
  initRoute(): void;
  server: Hapi.Server;
  routes: Hapi.IRouteConfiguration[];
}
export class BaseRoute implements IBaseRoute {

  server: Hapi.Server;
  routes: Hapi.IRouteConfiguration[];

  constructor(server: Hapi.Server, routes: Hapi.IRouteConfiguration[]) {
    this.server = server;
    this.routes = routes;
  }

  initRoute() {
    for (let index in this.routes) {
      this.server.route(this.routes[index]);
    }
  }

}
export default class NameRoute extends BaseRoute implements BaseRoute {
  routes: Hapi.IRouteConfiguration[];

  constructor(server: Hapi.Server) {
    this.routes = [
      {
        method: 'GET',
        path: '/',
        handler: (request: Hapi.Request, reply: Hapi.IReply) => {reply('Baller Abdude')},
        config: {
          description: 'Get todo',
          notes: 'An exmple description',
          tags: ['api']
        }
      }
    ];
    super(server, this.routes)
    super.initRoute();
  }
}
