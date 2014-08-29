source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.0.4'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.2'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Manage frontend dependencies with Bower
gem 'bower-rails'

# Authentication
gem 'devise'
gem 'omniauth'
gem 'omniauth-facebook'

# Management of configuration through env variables
gem 'figaro', github: 'laserlemon/figaro'

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

group :test, :development do
  # Use sqlite3 as the database for Active Record
  gem 'sqlite3'

  # Integrate RSpec tests with Rails
  gem 'rspec-rails'

  # Integrate Guard with RSpec: re-run tests when a Ruby file changes
  gem 'guard-rspec'

  # Integrate FactoryGirl with Rails
  gem 'factory_girl_rails'

  # Acceptance test framework for web applications
  gem 'capybara'

  # Provide a clean database state for tests
  gem 'database_cleaner'

  # Headless browser to mimic real user viewing of the web app (JS and stuff)
  gem 'capybara-webkit'
end

group :production do
  # Use PostgreSQL as the database for ActiveRecord
  gem 'pg'

  # Enables serving assets in production and redirects the logger to STDOUT
  gem 'rails_12factor'
end
