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
#  seller_id           :integer          not null
#
# Indexes
#
#  index_products_on_product_name  (product_name)
#  index_products_on_seller_id     (seller_id)
#
class Product < ApplicationRecord
    validates :product_description,:product_name,:price, presence: true
    
    belongs_to :seller,
        foreign_key: :seller_id,
        class_name: :User

    has_many :cart_items,
        foreign_key: :product_id,
        class_name: :CartItem

    has_many :reviews,
        foreign_key: :product_id,
        class_name: :Review

    has_many_attached :photos

  def average_rating
    reviews.average(:rating).to_f.round(2)

  end

  def self.findBySubstring(name) 
    Product.where('product_name ILIKE ?', "%#{name}%")
  end

end
