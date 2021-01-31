let homepage = require("../pages/homepage");
describe('demo calculator test', function(){
   it("addition test", function(){
     homepage.get("http://juliemr.github.io/protractor-demo/");
     homepage.enterFirstNumber('5');
     homepage.enterSecondNumber('5');
     homepage.clickGo();
     homepage.verifyResult('10');
     //element(by.model('first')).sendKeys('5');
     //element(by.model('second')).sendKeys('5');
     //element(by.css('[ng-click="doAddition()"]')).click();
     let result = element(by.cssContainingText('.ng-binding','10'));
     expect(result.getText()).toEqual('10');
     
     browser.sleep(5000);
   });
   it("sub test", function(){
    homepage.get("http://juliemr.github.io/protractor-demo/");
    homepage.enterFirstNumber('5');
    homepage.enterSecondNumber('5');
    homepage.clickGo1();
    homepage.verifyResult('10');
    //element(by.model('first')).sendKeys('5');
    //element(by.model('second')).sendKeys('5');
    //element(by.css('[ng-click="doAddition()"]')).click();
    let result = element(by.cssContainingText('.ng-binding','10'));
    expect(result.getText()).toEqual('10');
    
    browser.sleep(5000);
  });

});