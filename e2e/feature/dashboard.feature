Feature: Dashboard

  As a logged-in user
  I want to access the dashboard
  So that I can use different features


   Background:
    Given I am logged in

  Scenario: Verify dashboard is displayed
    Then the user logged in successfully and redirected to the home page

  Scenario: Access Work Calendar
    When I click on Work Calendar
    Then I should be redirected to the Work Calendar page