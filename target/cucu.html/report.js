$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Feature/demo1.feature");
formatter.feature({
  "name": "Data Driven test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Successful Login of testme app",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Login page is opened successfully",
  "keyword": "Given "
});
formatter.step({
  "name": "users clicks on Signin buttons",
  "keyword": "When "
});
formatter.step({
  "name": "users enters \"\u003cusername\u003e\" as usernamee \"\u003cpassword\u003e\" as passwordd",
  "keyword": "When "
});
formatter.step({
  "name": "msg displayed login successfullyyyy",
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
        "Password456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successful Login of testme app",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Login page is opened successfully",
  "keyword": "Given "
});
formatter.match({
  "location": "demo1code.login_page_is_opened_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users clicks on Signin buttons",
  "keyword": "When "
});
formatter.match({
  "location": "demo1code.users_clicks_on_Signin_buttons()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users enters \"lalitha\" as usernamee \"Password123\" as passwordd",
  "keyword": "When "
});
formatter.match({
  "location": "demo1code.users_enters_as_usernamee_as_passwordd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "msg displayed login successfullyyyy",
  "keyword": "Then "
});
formatter.match({
  "location": "demo1code.msg_displayed_login_successfullyyyy()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful Login of testme app",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Login page is opened successfully",
  "keyword": "Given "
});
formatter.match({
  "location": "demo1code.login_page_is_opened_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users clicks on Signin buttons",
  "keyword": "When "
});
formatter.match({
  "location": "demo1code.users_clicks_on_Signin_buttons()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users enters \"admin\" as usernamee \"Password456\" as passwordd",
  "keyword": "When "
});
formatter.match({
  "location": "demo1code.users_enters_as_usernamee_as_passwordd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "msg displayed login successfullyyyy",
  "keyword": "Then "
});
formatter.match({
  "location": "demo1code.msg_displayed_login_successfullyyyy()"
});
formatter.result({
  "status": "passed"
});
});