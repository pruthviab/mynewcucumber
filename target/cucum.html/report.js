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