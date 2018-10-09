Feature: Nabtrade Create Order
    As a user, I want to be able to log into the nabtrade application


Background:
    Given I have already logged in as "700006780" and "Test@123"

@createOrder
Scenario: Verify A Successful Order creation
        Given I am on nabtrade markets Page
        When  I am on nabtrade markets Page
        And I select for "BHP BILLITON LTD" in "NYS" exchange
        And I place a "buy" order with the details  
        Then I am able to review an order 


        
