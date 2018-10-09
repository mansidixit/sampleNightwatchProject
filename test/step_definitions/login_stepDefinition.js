const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

//var loginPage = client.page.nabTradeLoginPage();
var loginPage = client.page.loginPage();

Given('I am on nabtrade LoginPage', () => {
  return loginPage.waitForElementVisible('@loginButton', 80000); 
});



When('I login using {string} and {string}', (username, password) => {

  console.log(' The useename is ' + username);
  console.log(' The pawword is ' + password);
  console.log("*******************      ");//+loginPage+"******************************");


  loginPage.logIntoNabTrade(username, password);
});

Then('I am on TotalWealth Page', function () {
  client.waitForElementVisible('div#global-nav',80000);
  client.click('a#totalWealth-nav');
  return client.waitForElementVisible('div#subAccount-List', 80000);
});

Then('I can see my name {string} on TotalWealth Page', function (username) {
  return client
    .useXpath()
    .waitForElementVisible('//*[@id="app"]/div/div[1]/div/div[1]/div/header/div/div[2]/div[2]/h1', 80000)
    .assert.containsText('//*[@id="app"]/div/div[1]/div/div[1]/div/header/div/div[2]/div[2]/h1', username)
    .useCss(); 
  
});


