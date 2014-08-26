require 'rails_helper'

RSpec.describe "The homepage", :type => :feature do

  it "should have the correct title" do
    visit root_path
    expect(page).to have_title 'Papamaman'
  end

  it "should not have Javascript errors", :js => true do
    visit root_path
    expect(page.driver.error_messages).to match_array []
  end

  it "should update the <h1/> when the input field is updated", :js => true do
    visit root_path
    expect(page).not_to have_selector 'h1'
    name = 'Matthieu'
    within 'div[ng-app="papamaman"]' do
      fill_in 'name', :with => name
    end
    expect(page).to have_selector 'h1', text: "Hello, #{name}"
  end
end