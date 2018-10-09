const { client } = require('nightwatch-cucumber');
const { After,Before } = require('cucumber');

Before (function(done) {
       console.log('Running Before scenario : '+ client.launch_url );
				client.init();
                return client
                .url(client.launch_url)
                .windowMaximize('current');
    });

	After ( function(done) {
		
         console.log('Running after for : ' );
         console.log('Now we will call Jira test reports  Calling Jira API' );



		    console.log('Closed browser session');
        	return client.end();
             
    });