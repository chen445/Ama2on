# == Schema Information
#
# Table name: products
#
#  id                  :bigint           not null, primary key
#  price               :float            not null
#  product_description :text             not null
#  product_name        :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  category_id         :integer          not null
#  seller_id           :integer          not null
#
# Indexes
#
#  index_products_on_category_id   (category_id)
#  index_products_on_product_name  (product_name)
#  index_products_on_seller_id     (seller_id)
#
require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
