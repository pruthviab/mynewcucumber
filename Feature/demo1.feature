Feature: Data Driven test
 
 Scenario Outline: Successful Login of testme app
  Given Login page is opened successfully
  When users clicks on Signin buttons
  When users enters "<username>" as usernamee "<password>" as passwordd
  Then msg displayed login successfullyyyy
  
  Examples:
  |username  |password   |
  |lalitha   |Password123|
  |admin     |Password456|