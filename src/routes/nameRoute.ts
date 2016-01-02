/// <reference path="../../typings/node/node.d.ts" />
/// <reference path="../../typings/hapi/hapi.d.ts" />

import Hapi = require('hapi');
import {IBaseRoute, BaseRoute} from '../routes'

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
  }
}
