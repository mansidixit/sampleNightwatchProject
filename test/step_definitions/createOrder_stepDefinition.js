const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');


Given('I have already logged in as {string} and {string}', function (username, password) {
    
    client.useCss(); 
    client.waitForElementVisible('button#login-button', 80000)
   
    return client.setValue('input#userId', username)
        .setValue('input#password', password)
        .click('button#login-button')
        .useXpath()
        .waitForElementVisible('//*[@id="app"]/div/div[1]/div/div[1]/div/header/div/div[2]/div[2]/h1', 80000)
        .useCss();
});



Given('I am on nabtrade markets Page', function () {
      client.click('a#markets-nav');
      return client.waitForElementVisible('div#Performance',80000);
});


When('I select for {string} in {string} exchange', function (companyName, stockExName) {

});


When('I place a {string} order with the details', function (orderType) {

});
Then('I am able to review an order', function () {

});
