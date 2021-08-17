# == Schema Information
#
# Table name: categories
#
#  id            :bigint           not null, primary key
#  category_name :string           not null
#
class Category < ApplicationRecord
    validates :category_name, presence: true 
    has_many :products,
        foreign_key: :category_id,
        class_name: :Product

    def self.searchProducts(categoryId,searchQuery)
        Category.find_by(id: categoryId ).products.where('product_name ILIKE ?', "%#{searchQuery}%")
    end
end
