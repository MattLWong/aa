class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  has_many :reviews
  has_many :favorites
  has_many :favorite_users,
    through: :favorites,
    source: :user

  # a method that returns itself if it fits the following criterion

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end

  def average_rating
    # look into reviews, takes all the ratings, finds the average
    # average_rating is another attribute!
    reviews.average(:rating)
  end
end
