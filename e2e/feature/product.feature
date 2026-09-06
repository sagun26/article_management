Feature: Product Management

  Background:
    Given I am logged in

  Scenario: Products page is displayed
    When I click on Products
    Then I should be redirected to the Products page
    And I should see the Add Product button

  Scenario:  Add Product form
   
    When I click on the Add Product button
    Then I should see the Add Product form
    And  I select the following categories
  | Category   |
  | Ecomm      |
  | Supplement |

#   Scenario: Add a new product
#     When I click on Products
#     And I click on the Add Product button
#     And I enter the product details
#     And I click on the Save Product button
#     Then the product should be added successfully