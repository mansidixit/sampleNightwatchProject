Feature: Nabtrade LoginPage
    As a user, I want to be able to log into the nabtrade application
    
    @login
	Scenario: Verify A Successful login
        Given I am on nabtrade LoginPage
        When I login using "700006780" and "Test@123"
        Then I am on TotalWealth Page
        And I can see my name "MR J P UPTON" on TotalWealth Page 
        
