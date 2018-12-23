import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MqttModule, MqttService } from 'ngx-mqtt';

import { AppComponent } from './app.component';
import { ApiModule } from './api/';

export const MQTT_SERVICE_OPTIONS = {
  connectOnCreate: false,
  // hostname: 'vmm1.saaintertrade.com',
  // port: 39001,
  path: ''
};

export function mqttServiceFactory() {
  return new MqttService(MQTT_SERVICE_OPTIONS);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MqttModule.forRoot({
      provide: MqttService,
      useFactory: mqttServiceFactory
    }),
    ApiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
