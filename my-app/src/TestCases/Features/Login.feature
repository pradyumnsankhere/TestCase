Feature: Login Form

  Scenario: Rendering login form elements
    Given the user is on the login page
    Then they should see the username and password fields

  Scenario: Updating state on input change
    Given the user is on the login page
    When they enter their username as "testuser"
    Then the username input value should be "testuser"
 
 Scenario: Increment the counter value
    Given I am on the counter page
    When I click the increment button
    Then the counter value should be increased