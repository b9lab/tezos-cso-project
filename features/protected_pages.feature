Feature: Protected Pages
    As a not logged in user
    I can't access to protected pages.

    Scenario: Access profile page without login
        Given I visit the profile page
  	    Then I should be on the login page

    Scenario: Access my investment page without login
        Given I visit the my investment page
  	    Then I should be on the login page

    Scenario: Access fund page without login
        Given I visit the fund page
  	    Then I should be on the login page

    Scenario: Access withdraw page without login
        Given I visit the withdraw page
  	    Then I should be on the login page

    Scenario: Access transactions page without login
        Given I visit the transactions page
  	    Then I should be on the login page

