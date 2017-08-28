# == Schema Information
#
# Table name: steps
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :string
#  todo_id    :integer          not null
#  done       :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class StepTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
