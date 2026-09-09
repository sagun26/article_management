Feature: Product Management

  Background:
    Given I am logged in
    And I am on the Products page

     Scenario: Edit a product
    When I edit the product
    Then the product details should be changed

  Scenario: Delete a product
    When I delete the product "toothcare111"
    Then the product "toothcare111" should no longer be displayed

