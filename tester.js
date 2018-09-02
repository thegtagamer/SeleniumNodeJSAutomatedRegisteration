var { Builder, By, until } = require('selenium-webdriver');
const delay = require('delay');
console.log('####################### User-Injector #######################################');
for(let i = 51; i <=60;i++){
    console.log('Test Run=>'+i);

var check = {
    
    register:'Not Working',
  
    
};

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
 
    try {
        
        await driver.get('http://new-rc-814547052.ap-south-1.elb.amazonaws.com/');//homepage
        check.homepage='Loaded';
       
        var button = await driver.wait(
            until.elementLocated(By.xpath("/html/body[@class='app-index default']/div[@id='react-root']/div[@class='admin']/div[@id='reactionAppContainer']/div[@class='rui navbar1 asort-navbar']/header/nav/div[@class='ui secondary  menu container-fluid navbar ']/div[@class='right item']/span/div[@class='accounts']/div[@class='accounts dropdown']/div[@id='dropdown-test']")),
            6000
        );
        await button.click();
        var button = await driver.wait(
            until.elementLocated(By.xpath("/html/body[@class='app-index default']/div[@id='react-root']/div[@class='admin']/div[@id='reactionAppContainer']/div[@class='rui navbar1 asort-navbar']/header/nav/div[@class='ui secondary  menu container-fluid navbar ']/div[@class='right item']/span/div[@class='accounts']/div[@class='accounts dropdown']/div[@id='dropdown-test']/div[@class='accounts-dialog accounts-layout dropdown-menu pull-right']/div/div[2]/form[@class='login-form']/div[@class='form-group flex flex-justify-spaceBetween']/span[@id='register-link-test']/span")),
            60000
        );
        await button.click();
       
        var button = await driver.wait(
            until.elementLocated(By.xpath('//*[@id="email-test"]')),
            60000
        );
        await button.click(); 
       
        const email = "xyaz"+i+"@xyaz.com"
        await button.sendKeys(email);

        var button = await driver.wait(
            until.elementLocated(By.xpath('//*[@id="password-test"]')),
            60000
        );
        await button.click();
        await button.sendKeys('test');
    
        var button = await driver.wait(
            until.elementLocated(By.xpath('//*[@id="register-test"]')),
            60000
        );
        await button.click();
        check.register='Registered User=>'+email;

    } finally {
        
        await console.log(check);
        await driver.quit();
        await delay(2000);
        return;
    }
    
})();

//console.log('####################### End-User-Injector #######################################');
}

