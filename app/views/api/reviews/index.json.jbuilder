@reviews.each do |review|
    json.set! review.id do 
        json.partial! "review", review: review
        json.creat_time, review.created_at.strftime('%B %d, %Y')
    end
end 

