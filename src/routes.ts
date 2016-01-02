/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/hapi/hapi.d.ts" />

import Hapi = require('hapi');
import NameRoute from './routes/nameRoute';




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
    var nameRoute = new NameRoute(this.server);
  }

}
