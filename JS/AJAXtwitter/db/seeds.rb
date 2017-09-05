# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Tweet.destroy_all

PEOPLE = %w(Willy Cathy Amy Sarah Thao Lukas David Kat Cindy Amber Beverly Zhao Ulrich Zach Mickey Max Peter Obama Linda Simon Veronica Harold Zuckerberg Eric Carlos)

PEOPLE.each do |name|
  u = User.create!(username: name, password: "#{name}#{name}")
end

MESSAGES = [
  'Voted for Bernie Sanders',
  'Enjoys playing recreational squash at the UC Berkeley RSF',
  'Would like to travel to Iceland and Brazil',
  'Grew up in San Diego',
  'Would like to ride a bicycle across the United States',
  'Believes in more stingent environmental regulations',
  'Needs to update my Instagram and Twitter accounts',
  'Had a relaxing summer and also learned to program',
  'Enjoys listening to jazz and classical music',
  'Is looking for a job as a front-end developer',
]

User.all.each do |user|
  40.times do
    msg = MESSAGES.sample
    Tweet.create!(user_id: user.id, content: msg, created_at: rand(900).days.ago)
  end
end
