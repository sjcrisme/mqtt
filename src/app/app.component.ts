import { Component, OnInit } from '@angular/core';
import { ApiService } from './api/api.service';

export const appconfig = {
  host: '',
  port: 8883,
  keepalive: 5,
  wsOptions: {
    ca: '-----BEGIN CERTIFICATE-----\n' +
    'MIID/zCCAuegAwIBAgIJALFOc7ICRDRbMA0GCSqGSIb3DQEBCwUAMIGVMQswCQYD\n' +
    'VQQGEwJJTDELMAkGA1UECAwCSUwxCzAJBgNVBAcMAktTMRowGAYDVQQKDBEzcGkt\n' +
    'c29sdXRpb25zLmNvbTEOMAwGA1UECwwFQ2VydHMxGTAXBgNVBAMMEDNwaS1zb2x1\n' +
    'dGlvbnMtQ0ExJTAjBgkqhkiG9w0BCQEWFmluZm9AM3BpLXNvbHV0aW9ucy5jb20w\n' +
    'HhcNMTgwNTA0MTQ0NTM3WhcNMjgwNTAxMTQ0NTM3WjCBlTELMAkGA1UEBhMCSUwx\n' +
    'CzAJBgNVBAgMAklMMQswCQYDVQQHDAJLUzEaMBgGA1UECgwRM3BpLXNvbHV0aW9u\n' +
    'cy5jb20xDjAMBgNVBAsMBUNlcnRzMRkwFwYDVQQDDBAzcGktc29sdXRpb25zLUNB\n' +
    'MSUwIwYJKoZIhvcNAQkBFhZpbmZvQDNwaS1zb2x1dGlvbnMuY29tMIIBIjANBgkq\n' +
    'hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAz75btOQw/NxSeIHK5Rv/y6yu89CMbjFt\n' +
    'YU+LdGSMSQT8P4zz800C7YytyIR41Ir/Sbnby30JQ11OFJnPtaL3ce+PQeL/nI/v\n' +
    'AjOba4w3bDlGNHiokikM8dzi7mWgLSLVfIjJcDly0wwVUP6qNOJWPpfKIKgpOus8\n' +
    '+yF26x3IZgEKu1lQMpECwySpi0oc9N6/tf4eaTFUFzLMXNrPGtpH7vyobAydIwoV\n' +
    'Mvdxxx75oI4zBhO+Esk/Zp6VbEXYt79Bof1YAftK6dtDoGvCiL5cenqTqwqsxvup\n' +
    'XF6TKCuCTQThelykyyC1meRdY5thS/mlBJEs3RbMfe0R/WVx4WxlPQIDAQABo1Aw\n' +
    'TjAdBgNVHQ4EFgQUWSOiu55L5B+R9qmBC+JZEpNsLncwHwYDVR0jBBgwFoAUWSOi\n' +
    'u55L5B+R9qmBC+JZEpNsLncwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQsFAAOC\n' +
    'AQEAZNInbAlTNpvDueXQ5GgM/zSAyXpnCLJhCaj7yY3FQY7EovlumVQ8gPCtfqnL\n' +
    'm7kefe82AU51OXR1khS3Eygkb2qjG1sFdh3B0nr4rGnFe6Ixuf3XL1C+3OwtDsTG\n' +
    'fyNiRGFu9PFYyLmq7rt0sz/B2OP3QfxUa1xe5W8kRFKGMzV90NQzmsOJh+eQOv1c\n' +
    'ZHhRIhiGSibdJGHFGl5A9Y6lQxm2RDloztVYDga8xgjE8G5rGMAaxDm3C05BkSKi\n' +
    '2lYjDqL9PR8H2Aklb4Q/1n48MW4rYyFxf80oPYv2lNKbbZKSUZOItG5bVfJ9E3y+\n' +
    'inT8sL+U6psE+tD2nyG9ikPvzQ==\n' +
    '-----END CERTIFICATE----- '
  }, //  W/"27e-1J2bhkX6D1O3+hW/QssFtb5LaFI"
  protocolId: 'MQIsdp',
  protocolVersion: 3
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular5-mqtt';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.initialize(appconfig);
    this.api.mqtt.subscribeToStatusMqttTopic('statistics', 'response');
  }
}
