class Review < ApplicationRecord
  validates :bench_id, :body, :rating, presence: true
  validates :rating, inclusion: { in: (1..5)}

  belongs_to :bench

end
