# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Tweet.destroy_all

CATS = %w(mimi izzy franklin earnest toby michiko hazzan)

CATS.each do |cat|
  u = User.create!(username: cat, password: "#{cat}#{cat}")
end

MESSAGES = [
  'Ate some fish',
  'Chased a rabbit',
  'Pressed a laptop',
  'Took a photo of a human',
  'Took a siesta',
  'Jumped on a sofa',
  'Can I haz cheeseburger?',
  'Likes being scratched',
  'Chased my tail',
  'Does not want to be disturbed',
  'Ready to nap'
]

User.all.each do |user|
  40.times do
    msg = MESSAGES.sample
    Tweet.create!(user_id: user.id, content: msg, created_at: rand(600).days.ago)
  end
end
