class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :product_name, null: false
      t.float :price, null: false
      t.integer :seller_id, null: false
      t.text :product_description, null: false
      t.timestamps
    end
    add_index :products, :product_name
    add_index :products, :seller_id
  end
end
