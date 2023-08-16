@plp @sorting
Feature: Product Catalogue - Sorting Products


Scenario: A guest customer is able to sort procut by price
    Given I am on the EE Marketplace - "Smart Tech" category page
    When I sort products by price, lower to higher
    Then I can see products are sorted correctly