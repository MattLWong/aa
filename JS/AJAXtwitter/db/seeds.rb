# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Tweet.destroy_all

PEOPLE = %w(Willy Cathy Amy Sarah Thao Lukas David Kat Cindy Amber Beverly Zhao Ulrich Zach Mickey Max Peter Obama Linda Simon Veronica Harold Zuckerman Eric Carlos)

PEOPLE.each do |name|
  u = User.create!(username: name, password: "#{name}#{name}")
end

MESSAGES = [
  'Voted for Bernie Sanders',
  'Plays squash and badminton at the UC Berkeley RSF',
  'Would like to visit Iceland',
  'Grew up in San Diego, currently resides in the East Bay',
  'Would like to visit all 50 States',
  'Need to update my Instagram and Twitter accounts',
  'Listens to NPR, jazz and classical radio stations',
  'Training to become a front-end web developer',
  'Graduated from UC Davis in 2013',
  'Worked at Alta Bates as a medical scribe',
  'Keeps to a mostly vegetarian diet',
  'Photographed eight weddings this summer',
  'Uses Tiles to track my wallet and keys',
  'Drives a Volvo station wagon',
  "Favorite websites are Craigslist, Google, and the NYTimes",
  "Cooks a decent mushroom risotto"
]

User.all.each do |user|
  40.times do
    msg = MESSAGES.sample
    Tweet.create!(user_id: user.id, content: msg, created_at: rand(900).days.ago)
  end
end
