require 'watir-webdriver'
require 'cucumber'

Given(/^I am on the Cucumber.js GitHub repository$/) do
    @browser = Watir::Browser.new :chrome
    @browser.goto "www.baidu.com"
end