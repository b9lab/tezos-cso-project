Feature: Signin flows

    Scenario: Signin with email
        Given I visit the root page
        When I click on "Sign in"
        Then I should be on the login page