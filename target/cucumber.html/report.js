$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:feature/demo1.feature");
formatter.feature({
  "name": "login Action Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Successful Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Login page is opened",
  "keyword": "Given "
});
formatter.step({
  "name": "users clicks on login butto",
  "keyword": "When "
});
formatter.step({
  "name": "users enters \"\u003cusername\u003e\" as username \"\u003cpassword\u003e\" as password",
  "keyword": "When "
});
formatter.step({
  "name": "msg displayed login successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "lalitha",
        "Password123"
      ]
    },
    {
      "cells": [
        "admin",
        "password456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successful Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Login page is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "demo1code.login_page_is_opened()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users clicks on login butto",
  "keyword": "When "
});
formatter.match({
  "location": "demo1code.users_clicks_on_login_butto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users enters \"lalitha\" as username \"Password123\" as password",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "msg displayed login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "demo1code.msg_displayed_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Successful Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Login page is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "demo1code.login_page_is_opened()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d77.0.3865.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BDC6-DX-6GBDNK2\u0027, ip: \u0027192.168.6.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\TRAINI~1.16\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:62598}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 6fa186b380501dcf9f50a64994f87a64\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat stepdef.demo1code.login_page_is_opened(demo1code.java:18)\r\n\tat ✽.Login page is opened(file:feature/demo1.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "users clicks on login butto",
  "keyword": "When "
});
formatter.match({
  "location": "demo1code.users_clicks_on_login_butto()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "users enters \"admin\" as username \"password456\" as password",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "msg displayed login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "demo1code.msg_displayed_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
});