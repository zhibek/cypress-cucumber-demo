Feature: Demo

  I want to demo cypress cucumber style tests

  Scenario: Search for demo
    Given I am on the Google homepage
    When I search for "demo"
    Then I check the first search result
