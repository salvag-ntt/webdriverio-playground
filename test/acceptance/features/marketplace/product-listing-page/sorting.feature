@marketplace @plp @sorting
Feature: Product Catalogue - Sorting Products


Scenario: A guest customer is able to sort procut by price - high to low
    Given I am on the EE Marketplace - "Smart Tech" category page
    When I sort products by price, high to low
    Then I can see products are sorted correctly

Scenario: A guest customer is able to sort procut by price - low to high
    Given I am on the EE Marketplace - "Smart Tech" category page
    When I sort products by price, low to high
    Then I can see products are sorted correctly