const {Builder, By, Key} = require ("selenium-webdriver");
const assert = require("assert"); 
var should = require("chai").should();


async function example() {

await driver.get("https://lambdatest.github.io/sample-todo-app/")

// sampletodotext, id used to select 
await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

// assert
let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
    return value
});


//assert using node assertions
// assert.strictEqual(todoText, "Learn Selenium");

// strictEqual: checks that two strings match
// 1. what actual val is
// 2. what second val is


//assert using chai should 
    // chair\ assertions are more popular because they are
    // more human readable

todoText.should.equal("Learn Selenium");


// close the browser
await driver.quit();

}