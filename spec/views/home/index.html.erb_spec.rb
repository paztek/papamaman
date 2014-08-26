require 'rails_helper'

RSpec.describe "home/index.html.erb", :type => :view do

  it "displays an empty body" do
    render
    expect(rendered).to have_selector 'body', text: ''
  end
end
