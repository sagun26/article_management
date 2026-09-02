Feature: Notifications

  As a logged-in user
  I want to manage my notifications
  So that I can keep track of important updates

  Background:
    Given I am logged in
    And I am on the Notifications page

  Scenario: View unread notifications
    When I click on the Unread button
    Then I should see the unread notifications

  Scenario: Mark all notifications as read
    When I click on Mark all as read
    Then all notifications should be marked as read