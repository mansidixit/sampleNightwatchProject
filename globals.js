module.exports = {

  'default' : {
	beforeEach : function(browser, done) {
		console.log('Openeinfg the  browser to AUT Masi')
		
	
		
	},
	afterEach : function(browser, done) {
			browser
		  .end();
		console.log('Closed browser session')
		done();
	}
  }
};