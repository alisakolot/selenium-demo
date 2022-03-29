const {Builder, By, Key} = require ("selenium-webdriver");

async function example() {

// launch the browser

let driver = await new Builder().forBrowser("firefox").build();


// navigate to our app
await driver.get("https://lambdatest.github.io/sample-todo-app/")


// add a TODO
// sampletodotext, id used to select 
await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);


// close the browser
await driver.quit();

}

example();
