Feature: login
  As a user
  I want to login to the website 
  so that i can access the website 

  Scenario: login with valid credentials
  Given I am on the login page
  When I enter valid username
    | Name  |
    | sujata |
  Then the user logged in successfully and redirected to the home page