
 var loginCommands = {
     logIntoNabTrade : function(username,password){
                 console.log("Login Command gets called-------------------yayyyy");

                 this.waitForElementVisible('@loginButton', 80000);
              return this.setValue('@userID', username)
              .setValue('@password',password )
              .click('@loginButton');
          }
 }; 

module.exports = {
    url: function() {
        return this.api.launch_url;
    },
    commands :[loginCommands],
    elements: {
        userID :  'input#userId',
        password : 'input#password',
        loginButton :  'button#login-button',
        forgotPasswordLink : 'a#forgotPassword',
        alertMsg :'#app > div > div > div.screen.login > div > div.container > div:nth-child(2) > div.col-xs-12.col-sm-6.text-center > div.alert.type-error.alert.alert-info'
    }
};
