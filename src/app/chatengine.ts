import { Injectable } from '@angular/core';
import { ChatEngineCore } from 'chat-engine';
@Injectable()
export class ChatEngine {
  instance: any;
  create: any;
  plugin: any;
  me: any = { state: {} };
  chat: any = {};

  constructor() {
    this.instance = ChatEngineCore.create(
      {
        publishKey: 'pub-c-35ada3d8-8fc4-48b9-ba6d-6a98f701e7a0',
        subscribeKey: 'sub-c-7ae978a0-a85a-11ec-94c0-bed45dbe0fe1',
        presenceTimeout: 10,
        heartbeatInterval: 4
      },
      {
        debug: true,
        globalChannel: 'chat-engine-ionic'
      });
    this.create = ChatEngineCore.create.bind(this);
    this.plugin = ChatEngineCore.plugin;
  }
}
