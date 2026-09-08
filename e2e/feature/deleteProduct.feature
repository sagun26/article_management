Feature: Delete Product

Background:
Given I am logged in
And I am on the Products page

Scenario: Delete an individual product
When I click the Delete button for the product

Then I should see the delete confirmation message
When I confirm the delete product
Then the product should be removed from the product list
