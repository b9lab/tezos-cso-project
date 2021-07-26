Feature: Base tests
  
  Scenario: Focus the title on the root page
    Given I visit the root page
    Then I should be able to focus the title

  Scenario: See data on the investment information page
    Given I visit the investment info page
    Then I should have values in all information boxes
