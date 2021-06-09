json.extract! review, :id, :rating, :title,:body,:reviewer_id,:product_id
json.reviewer do 
    json.set! review.reviewer.id do 
         json.extract! review.reviewer, :id, :first_name, :last_name
    end 
end 