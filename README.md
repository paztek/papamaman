Papa Maman
==========

That's French for *that does it all*

A project skeleton for Rails apps using AngularJS and hosted on cloud environments similar to Heroku.

I tried to adopt most of the best practices I know from other web stacks. Please don't kill me if they don't match yours. I'm pretty new to Ruby and Ruby on Rails.

Here is a list of all the awesome things that are set up and ready:

* Management of configuration variables through environment variables: use ```application.yml``` and ```database.yml`` in dev and testing and ENV variables in production. 
* Bower integration with Rails: Manage front-end dependencies with Bower but still integrate them in the Rails Asset Pipeline (Sass, Coffeescript, minification, etc...)
* Testing: RSpec integrated with Rails integrated with Guard (they re-run everytime a file changes). Controller tests, integration tests using Capybara and a headless webkit browser (executes Javascript, yeah!).
