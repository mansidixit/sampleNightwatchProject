var nightwatchCucumber = require('nightwatch-cucumber')


nightwatchCucumber({
  cucumberArgs: [
    '--require', 'test/step_definitions',
    'test/features',
  ],
});

// var nightwatchCucumberConf = {
//     runner: 'nightwatch',
//     featureFiles: 'features',
//     stepDefinitions: 'step_definitions',
//     closeSession: 'afterFeature'
// }



module.exports = {
   // src_folders : [nightwatchCucumber(nightwatchCucumberConf)], //["tests"],
    output_folder : "reports",
    custom_commands_path : "",
    custom_assertions_path : "",
    page_objects_path : "test/page_objects",
    globals_path : "",
  
    selenium : {
      start_process : "true",
      server_path : "./node_modules/selenium-standalone/.selenium/selenium-server/selenium-server-standalone-3.9.1.jar",
      log_path : "",
      cli_args : {
        "webdriver.chrome.driver" : "./node_modules/selenium-standalone/.selenium/chromedriver/chromedriver.exe",
        "webdriver.gecko.driver" : "./node_modules/selenium-standalone/.selenium/geckodriver/geckodriver.exe",
        "webdriver.edge.driver" : ""
      }
    },
    test_settings : {
      default : {
        launch_url:  "https://www.google.co,.au",
        screenshots : {
          enabled : false,
          path : ""
        },
        request_timeout_options: {
           timeout: 15000,
            retry_attempts: 5
        },
        desiredCapabilities: {
          browserName: "chrome",
          javascriptEnabled: true,
          acceptSslCerts: true,
          chromeOptions : {
            args : ["no-sandbox","start-maximized","test-type","disable-extensions","disbale-web-security"]  
          }        
        }       
      },
      firefox : {
        screenshots : {
          enabled : false,
          path : ""
        },
        
       desiredCapabilities: {
          browserName: "firefox",
          javascriptEnabled: true,
          acceptSslCerts: true,
          marionette: true            
        }
        
      }
     
  
   }
}; 

 
