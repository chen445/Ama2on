json.category do 
    json.partial! '/api/categories/category', category: @category
end 
json.products do 
    @category.products.each do |product|
        json.set! product.id do 
           json.partial! "/api/products/product", product: product
        end 
    end 
end

