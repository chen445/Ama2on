# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  body        :text             not null
#  rating      :integer          not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  product_id  :integer          not null
#  reviewer_id :integer          not null
#
# Indexes
#
#  index_reviews_on_product_id   (product_id)
#  index_reviews_on_reviewer_id  (reviewer_id)
#
require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
