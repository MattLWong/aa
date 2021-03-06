# == Schema Information
#
# Table name: parties
#
#  id         :integer          not null, primary key
#  name       :string
#  location   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Party < ActiveRecord::Base
  validates :name, :location, presence: true
  
  has_many :invitations
  has_many :guests, through: :invitations, source: :guest
end
