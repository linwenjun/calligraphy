require 'watir-webdriver'
require 'selenium-webdriver'
require 'cucumber'
require 'rspec'

Before do
    @browser = Watir::Browser.new :chrome
end

After do
    @browser.close
end

Given(/^I am on the Calligraphy page$/) do
    @browser.goto "http://localhost:8000/"
end

When(/^I click the add button$/) do
    btn = @browser.div :id => 'add'
    btn.click
end

When(/I fill the name with "([^"]*)"$/) do |name|
    name_input = @browser.text_field :id=> 'demo_name'
    name_input.set name
end

When(/I fill the score with "([^"]*)"/) do |score|
    score_input = @browser.text_field :id=> 'demo_score'
    score_input.set score
end

When(/^I click the ok button$/) do
    submit = @browser.button :id=> 'add-submit'
    submit.click
end

Then(/^I can see the first block conatins "([^"])"$/) do |str|
    sleep(1)
    container = @browser.element(:class_name => "todo-list-container", :index => 0)
    expect(container.text).to include str
    
end

