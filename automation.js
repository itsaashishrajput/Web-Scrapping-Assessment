const  puppeteer = require("puppeteer");
let page;
const browserOpenromise = puppeteer.launch({ headless: false});
browserOpenpromise.then(function(browser){
    const pagesArrpromise = browser.pages();
    return pagesArrpromise;
}).then(function(browserPages){
    page = browserPages[0];
    let gotoPromise = page.goto("https://www.google.com/");
    return gotoPromise;
}).then(function(){
    let elementWaitPromise = page.waitForSelector("input[type='text']", {visible: true});
    return elementWaitPromise;
}).then(function(){
    let keyWillBeSendPromise = page.type("input[type='text']", "wikipedia");
    return keyWillBeSendPromise;
}).then(function(){
    let enterWillBePressed = page.keyboard.press("Enter");
    return enterWillBePressed;
}).then(function(){
    let elementWaitpromise = page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", {visible: true});
    return elementWaitpromise;
}).then(function(){
    let keyWillBeSendPromise = page.click("h3.LC20lb.MBeuO.DKV0Md");
    return keyWillBeSendPromise;
}).then(function(){
    let keyWillWaitEnglish = page.waitForSelector("a#js-link-box-en.link-box", {visible: true});
    return keyWillWaitEnglish;
}).then(function(){
    let keyWillSelectEnglish = page.click("a#js-link-box-en.link-box");
    return keyWillSelectEnglish;
}).then(function(){
    let keyWillWaitAllPortals = page.waitForSelector("li.portal-hright.portal-vbot", {visible: true});
    return keyWillWaitAllPortals;
}).then(function(){
    let keyWillSelectAllPortals = page.click("li.portal-hright.portal-vbot");
    return keyWillSelectAllPortals;
}).then(function(){
    let keyWillWaitAzIndex = page.waitForSelector("#mf-section-0 > div:nth-child(2) > ul > li:nth-child(9)", {visible: true});
    return keyWillWaitAzIndex;
}).then(function(){
    let keyWillSelectAzIndex = page.click("#mf-section-0 > div:nth-child(2) > ul > li:nth-child(9)");
    return keyWillSelectAzIndex;
}).then(function(){
    let keyWillWaitA = page.waitForSelector("#toc > tbody > tr:nth-child(3) > td:nth-child(1) > b > a", {visible: true});
    return keyWillWaitA;
}).then(function(){
    let keyWillSelectA = page.click("#toc > tbody > tr:nth-child(3) > td:nth-child(1) > b > a");
    return keyWillSelectA;
}).catch(function(err){
    console.log(err)
})