/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/hapi/hapi.d.ts" />
/// <reference path="../typings/joi/joi.d.ts" />

import Hapi = require('hapi');
import Joi = require('joi');
import {ApplicationConfig, IAppConfig} from './config/application'
import Routes from './routes';

interface IApi {
  config: IAppConfig;
  server: Hapi.Server;
  startApi(): void;
  initRoutes(): void;
  routeManager: Routes;
}
class MyApi implements IApi {

  config: IAppConfig;
  server: Hapi.Server;

  routeManager: Routes;

  constructor() {

    this.config = new ApplicationConfig();
  }

  setupConfiguration() {
    let serverConfig = { };
    this.server = new Hapi.Server(serverConfig);
    this.server.app.name = this.config.appName;
  }

  startApi() {

    this.setupConfiguration();

    this.server.connection({port: this.config.port, host: '0.0.0.0', routes: {cors: true}});

    this. routeManager = new Routes(this.server)
    this.initRoutes()

    this.server.start( () =>  {
      let dashChars = '+' + new Array(32 + this.server.info.uri.length + this.server.app.name.length).join('-') + '+';
      console.log(dashChars);
      console.log('| Application `%s` is running at %s |', this.server.app.name, this.server.info.uri);
      console.log(dashChars);

    });
  }

  initRoutes() {
    this.routeManager.initRoutes();
  }
}

var api = new MyApi();
api.startApi();
