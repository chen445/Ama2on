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
end
