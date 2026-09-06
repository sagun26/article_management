Feature: Notifications

  As a logged-in user
  I want to manage my notifications
  So that I can keep track of important updates

  Background:
    Given I am logged in
    And I am on the Notifications page

  
  Scenario:see more notifications
    When I click on the See More button
    Then I should see more notifications
   