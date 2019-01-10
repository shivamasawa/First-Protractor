describe('Protractor Demo App', function() {
  it('should have a title', function() {
  	browser.ignoreSynchronization = true;
    browser.get('https://www.google.co.in/');

    expect(browser.getTitle()).toEqual('Google');
  });
});