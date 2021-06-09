@reviews.each do |review|
    json.set! review.id do 
        json.partial! "review", review: review
        json.createTime review.created_at.strftime('%B %d, %Y')
        json.reviewerFirstName review.reviewer.first_name
        json.reviewerLastName review.reviewer.last_name
    end
end 

