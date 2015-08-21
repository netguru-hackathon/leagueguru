# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# Environment variables (ENV['...']) can be set in the file config/application.yml.
# See http://railsapps.github.io/rails-environment-variables.html

League.destroy_all
User.destroy_all

(0...10).each do
  League.new(name: (0...8).map { (65 + rand(26)).chr }.join, open: [true, false].sample).save
end

(0..10).each do |n|
  User.create(name: "Joe-#{n} #{n}-Smith", email: "email#{n}@example.com", password: '12345678')
end
