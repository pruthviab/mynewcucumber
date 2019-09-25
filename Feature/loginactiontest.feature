Feature: Login Action Test
Scenario: Successful Login with Valid Credential
Given  login page is opened
When user enters "Lalitha" as a username and "Password123" as a password
When user clicks on login Button
Then user will Finds a testmeapp homepage