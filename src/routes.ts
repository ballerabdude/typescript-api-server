/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/hapi/hapi.d.ts" />

import Hapi = require('hapi');
import NameRoute from './routes/nameRoute';


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
    for (let route in this.routes) {
      this.server.route(route);
    }
  }

}


interface IRoutes {
  server: Hapi.Server;

}

export default class Routes implements IRoutes {

  server: Hapi.Server;

  constructor(server: Hapi.Server) {
    this.server = server;
    return this;
  }

  initRoutes() {
    new NameRoute(this.server);
  }

}
