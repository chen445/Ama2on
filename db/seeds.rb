# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
Product.delete_all
Review.delete_all


demo_user= User.create!(
    first_name: "demoUser",
    last_name:"demo",
    password:"123456",
    email:'demo@gmail.com',
)
user1 = User.create!(
    first_name: 'Yusef',
    last_name: 'Gillespie',
    email:'yusef@gmail.com',
    password: '123456'
)

user2 = User.create!(
    first_name: 'Kellan',
    last_name: 'Goodwin',
    email:'kellan@gmail.com',
    password: '123456'
)

user3= User.create!(
    first_name: 'Aisha',
    last_name: 'Whittle',
    email:'aisha@gmail.com',
    password: '123456'
)


user4= User.create!(
    first_name: 'Margie',
    last_name: 'Hope',
    email:'margie@gmail.com',
    password: '123456'
)

user5= User.create!(
    first_name: 'Carlos',
    last_name: 'Simmons',
    email:'carlos@gmail.com',
    password: '123456'
)

user6= User.create!(
    first_name: 'Jaime',
    last_name: 'Nunez',
    email:'jaime@gmail.com',
    password: '123456'
)


user7= User.create!(
    first_name: 'Marina',
    last_name: 'Carson',
    email:'marina@gmail.com',
    password: '123456'
)


user8= User.create!(
    first_name: 'Lauryn',
    last_name: 'Moon',
    email:'lauryn@gmail.com',
    password: '123456'
)


user9= User.create!(
    first_name: 'Janiya',
    last_name: 'Zhang',
    email:'janiya@gmail.com',
    password: '123456'
)

user10= User.create!(
    first_name: 'Damian',
    last_name: 'White',
    email:'damian@gmail.com',
    password: '123456'
)

user11= User.create!(
    first_name: 'Ashley',
    last_name: 'Cantu',
    email:'ashley@gmail.com',
    password: '123456'
)

user12= User.create!(
    first_name: 'Janiyah',
    last_name: 'Valencia',
    email:'valencia@gmail.com',
    password: '123456'
)

user13= User.create!(
    first_name: 'Roger',
    last_name: 'Flynn',
    email:'roger@gmail.com',
    password: '123456'
)
user14= User.create!(
    first_name: 'Nina',
    last_name: 'Santana',
    email:'nina@gmail.com',
    password: '123456'
)
user15= User.create!(
    first_name: 'Andres',
    last_name: 'Woodard',
    email:'woodard@gmail.com',
    password: '123456'
)
user16= User.create!(
    first_name: 'Frank',
    last_name: 'Knox',
    email:'knox@gmail.com',
    password: '123456'
)
user17= User.create!(
    first_name: 'Raina',
    last_name: 'Abbott',
    email:'raina@gmail.com',
    password: '123456'
)

category1= Category.create!(
    category_name: "Books"
)

category2= Category.create!(
    category_name: "Health & Household"
)

category3= Category.create!(
    category_name: "Electronics"
)

category4= Category.create!(
    category_name: "Fashion"
)

category5= Category.create!(
    category_name: "Grocery & Gourmet Food"
)

category6= Category.create!(
    category_name: "Toys & Game"
)


product1 = Product.create!(
    product_name: "JavaScript: The Good Parts",
    product_description: "This is a book about the JavaScript programming language.",
    seller_id: user1.id,
    price: 20,
    category_id: category1.id
)

product1.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/JavaScript+The+Good+Parts+Cover.jpeg"), filename:'JavaScript The Good Parts Cover.jpeg')
product1.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/81-IfLqwLIL.jpeg"), filename:'81-IfLqwLIL.jpeg')


product2 = Product.create!(
    product_name: "M&M Chocolate",
    product_description: "Made with real milk chocolate, M&M'S Milk Chocolate Candies have a creamy center surrounded by a colorful candy shell",
    seller_id: user3.id,
    price: 6,
    category_id: category5.id
)

product2.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/61%2BLsg7nzeL._SL1000_.jpg"), filename:'61+Lsg7nzeL._SL1000_.jpg')
product2.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/61Y977%2BebkL._SL1000_.jpg"), filename:'61Y977+ebkL._SL1000_.jpg')
product2.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/61iR5%2B2X-KL._SL1000_.jpg"), filename:'61iR5+2X-KL._SL1000_.jpg')

product3 = Product.create!(
    product_name: "Long Leaf Plant",
    product_description: "This is perfect for a table top decoration for home ",
    seller_id: user1.id,
    price: 30,
    category_id: category2.id
)

product3.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/plant.jpg"), filename:'plant.jpg')
product3.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/plant1.jpg"), filename:'plant1.jpg')
product3.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/plant2.jpg"), filename:'plant2.jpg')
product3.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/plant4.jpg"), filename:'plant4.jpg')


product4 = Product.create!(
    product_name: "Watch with Leather Strap",
    product_description: "This classic simple watch will be greatly suitable for any occasion.",
    seller_id: user7.id,
    price: 100,
    category_id: category4.id
)

product4.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/watch.jpg"), filename:'watch.jpg')
product4.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/watch1.jpg"), filename:'watch1.jpg')
product4.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/watch2.jpg"), filename:'watch2.jpg')

product5 = Product.create!(
    product_name: "Table Lamp",
    product_description:"This lamp fits for bedroom, living room, dining room, office or study.",
    seller_id: user7.id,
    price: 55,
    category_id: category2.id
)

product5.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/lamp1.jpg"), filename:'lamp1.jpg')
product5.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/lamp2.jpg"), filename:'lamp1.jpg2')
product5.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/lamp3.jpg"), filename:'lamp3.jpg')
product5.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/lamp4.jpg"), filename:'lamp4.jpg')



product6 = Product.create!(
    product_name: "Fried Egg Plush",
    product_description: "Playful plush egg stuffie with beaded eyes and corduroy arms is all set for snuggle.",
    seller_id: user9.id,
    price: 30,
    category_id: category6.id
)
product6.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/jellycat-egg.jpeg"), filename:'jellycat-egg.jpeg')
product6.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/fried+egg.jpg"), filename:'fried egg.jpg')

product7 = Product.create!(
    product_name: "Coffee Mug",
    product_description: "Big handle which helps you enjoy your tea/coffee comfortably.",
    seller_id: user7.id,
    price: 20,
    category_id: category2.id
)

product7.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/mug.jpg"), filename:'mug.jpg')
product7.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/mug1.jpg"), filename:'mug1.jpg')
product7.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/mug2.jpg"), filename:'mug2.jpg')
product7.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/mug3.jpg"), filename:'mug3.jpg')


product8= Product.create!(
    product_name: "Rainbow Shaped Pillow",
    product_description: "Perfect for car,home,office,coffeeshop.",
    seller_id: user9.id,
    price:30,
    category_id: category6.id
)

product8.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/pillow.jpg"), filename:'pillow.jpg')
product8.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/pillow1.jpg"), filename:'pillow1.jpg')
product8.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/pillow2.jpg"), filename:'pillow2.jpg')

product9=Product.create!(
    product_name: "Swimsuit",
    product_description: "Comfortable swimsuite, all ages suitable.",
    seller_id: user10.id,
    price: 45,
    category_id: category4.id
)

product9.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/swmming_suit.jpg"), filename:'swmming_suit.jpg')
product9.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/swimmingsuite2.jpg"), filename:'swimmingsuite2.jpg')
product9.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/swmmingsuite1.jpg"), filename:'swmmingsuite1.jpg')


product10=Product.create!(
    product_name: "Classic Round Sunglasses",
    product_description: " These stylish round sunglasses are made of high-quality frames",
    seller_id: user10.id,
    price: 150,
    category_id: category4.id
)

product10.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/sunglass.jpg"), filename:'sunglass.jpg')
product10.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/sunglass1.jpg"), filename:'sunglass1.jpg')

product10=Product.create!(
    product_name: "Beach Sun Straw Hat",
    product_description: "These sun straw hats are made of high quality paper straw",
    seller_id: user10.id,
    price: 30,
    category_id: category4.id
)

product10.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/straw+hat.jpg"), filename:'straw hat.jpg')
product10.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/strawhat1.jpg"), filename:'strawhat1.jpg')
product10.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/strawhat2.jpg"), filename:'strawhat2.jpg')


product11=Product.create!(
    product_name: "Flip-Flop",
    product_description: "TLIGHTWEIGHT, COMFORTABLE & WATERPROOF",
    seller_id: user10.id,
    price: 35,
    category_id: category4.id
)
product11.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/flipflop1.jpg"), filename:'flipflop1.jpg')
product11.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/flip_flops.jpg"), filename:'flip_flops.jpg')
product11.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/flipflops2.jpg"), filename:'flipflops2.jpg')

product12=Product.create!(
    product_name: "Rainbow Lollipops",
    product_description: "Stunning colors with delicious flavor",
    seller_id: user3.id,
    price: 8.99,
    category_id: category5.id
)

product12.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/rainbowsucker.jpg"), filename:'rainbowsucker.jpg')
product12.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/candy.jpg"), filename:'candy.jpg')

product13=Product.create!(
    product_name: "Beach Umbrella",
    product_description: "100% UV PROTECTION",
    seller_id: user10.id,
    price: 65,
    category_id: category2.id
)
product13.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/umbrella.jpg"), filename:'umbrella.jpg')
product13.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/umbrella1.jpg"), filename:'umbrella1.jpg')
product13.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/umbrella2.jpg"), filename:'umbrella2.jpg')

product14=Product.create!(
    product_name: "The Road to React",
    product_description: "Your journey to master plain yet pragmatic React.js",
    seller_id: user1.id,
    price: 29.9,
    category_id: category1.id
)
product14.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/React+hooks.jpeg"), filename:'React hooks.jpeg')


product15=Product.create!(
    product_name: "Reusable Plastic Bottle",
    product_description: "The motivational time marker reminds you to drink enough water throughout the day ",
    seller_id: user7.id,
    price: 30,
    category_id: category2.id
)

product15.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/waterbottle.jpg"), filename:'waterbottle.jpg')
product15.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/waterbottle1.jpg"), filename:'waterbottle1.jpg')
product15.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/waterbottle2.jpg"), filename:'waterbottle2.jpg')



product16=Product.create!(
    product_name: "Coffee Maker",
    product_description: "Manual pour over Coffee maker allows you to brew an excellent cup of Coffee",
    seller_id: user7.id,
    price: 30,
    category_id: category2.id
)

product16.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/coffeeMaker.jpg"), filename:'coffeeMaker.jpg')
product16.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/coffeemaker1.jpg"), filename:'coffeemaker1.jpg')
product16.photos.attach(io: open("https://ama2on-seeds.s3-us-west-1.amazonaws.com/coffeemaker2.jpg"), filename:'coffeemaker2.jpg')

puts "Creating reviews...."

review1 = Review.create!(
    product_id: product1.id,
    title: "Every JavaScript developer with a pre-existing working knowledge of JavaScript should read this book.",
    body:"If I was to simply sit and read this book I wouldn't learn a thing, I feel that is written well however at points it could be explained in better ways, say that, I imagine this is just my style of learning.",
    rating: 5,
    reviewer_id: user11.id,
)

review2 = Review.create!(
    product_id: product1.id,
    title: "Waste of money",
    body: "I generally prefer to have a book for reference rather than just using the internet but this just isn't worth the money. No real insights. No real depth. It's not a terrible book just really bad value.",
    rating: 3,
    reviewer_id: user17.id
)
review3 = Review.create!(
    product_id: product1.id,
    title: "Great book",
    body: "This is one of those books that you always planned to read. When you do, it's extremely gratifying because it openly admits all of the ridiculous flaws that are contained in JavaScript, a language that is of huge importance to web development and to the various descendant technologies that have been built on its bones.",
    rating: 5,
    reviewer_id: user16.id
)


review4 = Review.create!(
    product_id: product2.id,
    title: "Great chocolate",
    body: "Great chocolate taste.",
    rating: 5,
    reviewer_id: user1.id
)


review5 = Review.create!(
    product_id: product2.id,
    title: "Nice chocolate ",
    body: "The cool thing to do is to collect all the M&M's seasonal bags and make one big bowl of diverse colored M&M's.",
    rating: 5,
    reviewer_id: user4.id
)

review6 = Review.create!(
    product_id: product2.id,
    title: "Very disappointed",
    body: "When ordering I was hopeful that they would be fresh. These appear to have been sitting on a shelf for at least a year.",
    rating: 2,
    reviewer_id: user15.id
)

review7 = Review.create!(
    product_id: product3.id,
    title: "Cute little plant, minimal damage",
    body: "Overall I’m pretty happy with the plant.",
    rating: 5,
    reviewer_id: user6.id 
)

review8 = Review.create!(
    product_id: product3.id,
    title: "Not what I expected",
    body: "I finally received my plant today after waiting three weeks and I must say, I’m extremely dissatisfied.",
    rating: 3,
    reviewer_id: user12.id 
)


review9 = Review.create!(
    product_id: product3.id,
    title: "Perfect plant! ",
    body: "I love my new plant! I was a little nervous from old reviews, but they were all so old I had a feeling they wouldn’t be right.",
    rating: 5,
    reviewer_id: user4.id 
)

review10 = Review.create!(
    product_id: product3.id,
    title: "Healthy Plant",
    body: "It does look healthy, but I don't like it.",
    rating: 3,
    reviewer_id: user10.id 
)

review11 = Review.create!(
    product_id: product4.id,
    title: "Really love it!",
    body: "I love this watch! I've been wearing it every day.",
    rating: 5,
    reviewer_id: user10.id 
)

review12 = Review.create!(
    product_id: product4.id,
    title: "Great watch for small wrists!!",
    body: "This little watch meets all of my requirements!",
    rating: 5,
    reviewer_id: user14.id 
)

 
review13 = Review.create!(
    product_id: product5.id,
    title: " Love this!!",
    body: "I actually really like this lamp!",
    rating: 5,
    reviewer_id: user3.id 
)

review14 = Review.create!(
    product_id: product5.id,
    title: "Great value for the features!",
    body: "Great lamp.",
    rating: 4,
    reviewer_id: user5.id 
)

review15 = Review.create!(
    product_id: product5.id,
    title: "Modern, clean, functional and great lighting",
    body: "Arrived on time and described. It’s a little smaller than what I measured. However we really like the style.",
    rating: 5,
    reviewer_id: user11.id 
)

review16 = Review.create!(
    product_id: product5.id,
    title: "Much smaller than you think",
    body: "While the light output is excellent, the lamp is small and you have to have the right place to put the lamp.",
    rating: 3,
    reviewer_id: user14.id
)

review17 = Review.create!(
    product_id: product5.id,
    title: " Tiny Lamp",
    body: "I returned this. It was tiny.",
    rating: 1,
    reviewer_id: user1.id 
)

review18 = Review.create!(
    product_id: product5.id,
    title: "Love the Light",
    body: "Fits perfect on the small corner desk I bought.",
    rating: 4,
    reviewer_id: user15.id 
)

review19 = Review.create!(
    product_id: product6.id,
    title: "cute!",
    body: "Well-made, soft, unique, and adorable.",
    rating: 5,
    reviewer_id: user10.id 
)

review20 = Review.create!(
    product_id: product6.id,
    title: "cute!",
    body: " Very well made and a nice size.",
    rating: 5,
    reviewer_id: user11.id 
)

review21 = Review.create!(
    product_id: product6.id,
    title: "so darn cute!",
    body: "Just had to purchase it. I really like it",
    rating: 5,
    reviewer_id: user4.id 
)

review22 = Review.create!(
    product_id: product7.id,
    title: "Overall, good cup.",
    body: "This mug is nice. I like the fact that it has a broad base.",
    rating: 4,
    reviewer_id: user2.id 
)

review23 = Review.create!(
    product_id: product7.id,
    title: "Not my favourite",
    body: "The size is a little unnessary compared to the 10oz or larger size",
    rating: 3,
    reviewer_id: user10.id 
)

review24 = Review.create!(
    product_id: product7.id,
    title: "Perfect Work from Home mug",
    body: "Was looking for an upgrade over the standard ceramic mug. This was exactly what I was looking for.",
    rating: 5,
    reviewer_id: user16.id 
)

review25 = Review.create!(
    product_id: product8.id,
    title: "Good value",
    body: "Great value for the product.",
    rating: 5,
    reviewer_id: user13.id 
)
review26 = Review.create!(
    product_id: product8.id,
    title: "Cute, soft pillow",
    body: "My daughter loves this pillow",
    rating: 5,
    reviewer_id: user14.id 
)

review27 = Review.create!(
    product_id: product8.id,
    title: "Poor make",
    body: "The seam opened up in half hour of use.",
    rating: 1,
    reviewer_id: user3.id 
)

review28 = Review.create!(
    product_id: product8.id,
    title: " Very cute",
    body: "This little pillow is so cute and perfect",
    rating: 4,
    reviewer_id: user6.id 
)

review29 = Review.create!(
    product_id: product8.id,
    title: "Love, love this bathing suit",
    body: "This bathing suit fit all of my needs and I love it.",
    rating: 5,
    reviewer_id: user3.id 
)


review30 = Review.create!(
    product_id: product8.id,
    title: "Ideal for me",
    body: "This provides an awesome fit.",
    rating: 5,
    reviewer_id: user14.id 
)

review31 = Review.create!(
    product_id: product8.id,
    title: "Nice style bra and elastic are a problem",
    body: "Elastic at the back of the legs was loose.",
    rating: 3,
    reviewer_id: user17.id 
)


review32 = Review.create!(
    product_id: product8.id,
    title: "Ill fitting",
    body: "The material was nice and thick. The problem was lack of tummy control.",
    rating: 3,
    reviewer_id: user11.id 
)


review33 = Review.create!(
    product_id: product9.id,
    title: "Not the best",
    body: "They were super cute! They looked great on me. But they broke really quickly, like within two weeks of my purchase.",
    rating: 2,
    reviewer_id: user8.id 
)

review34 = Review.create!(
    product_id: product9.id,
    title: "Small but cute, definitely not for bigger faces",
    body: "cheap quality and it seem as if it was made for extremely small faces but very cute",
    rating: 2,
    reviewer_id: user9.id 
)

review35 = Review.create!(
    product_id: product9.id,
    title: "Cute but not comfy",
    body: "Not the most comfortable but they are cute",
    rating: 3,
    reviewer_id: user5.id 
)


review36 = Review.create!(
    product_id: product10.id,
    title: "Perfect beach hat",
    body: "I love this hat!!! ",
    rating: 5,
    reviewer_id: user11.id 
)

review37 = Review.create!(
    product_id: product10.id,
    title: "I love this hat!",
    body: "I LOVE this hat.It kept the sun off my face.",
    rating: 5,
    reviewer_id: user3.id 
)


review38 = Review.create!(
    product_id: product10.id,
    title: " Damaged not good quality",
    body: "It arrived smashed doesn’t have the shape of the picture.",
    rating: 1,
    reviewer_id: user17.id 
)


review39 = Review.create!(
    product_id: product11.id,
    title: "Not as comfortable as I'd hoped.",
    body: "Not as comfortable as I'd hoped",
    rating: 3,
    reviewer_id: user12.id 
)

review40 = Review.create!(
    product_id: product11.id,
    title: "Just ok",
    body: " These are just leather straps so they aren’t as comfortable.",
    rating: 3,
    reviewer_id: user11.id 
)

review41 = Review.create!(
    product_id: product11.id,
    title: " Heel hanging off horrible fit",
    body: "I agree with another reviewer here in that there is something wrong with the proportions of this shoe.",
    rating: 1,
    reviewer_id: user8.id 
)

review42 = Review.create!(
    product_id: product11.id,
    title: "LOVE LOVE LOVE",
    body: "The style is amazing, they look much better in person.",
    rating: 5,
    reviewer_id: user4.id 
)

review43 = Review.create!(
    product_id: product12.id,
    title: "Great flavor",
    body: " I was expecting it to be bigger than this. But for the price it's great!",
    rating: 4,
    reviewer_id: user4.id 
)


review44= Review.create!(
    product_id: product12.id,
    title: " Nice product!",
    body: " Fast delivered and well packed",
    rating: 5,
    reviewer_id: user9.id 
)


review45= Review.create!(
    product_id: product12.id,
    title: "The children's favorite!",
    body: "Every single child chose these!",
    rating: 5,
    reviewer_id: user13.id 
)


review46= Review.create!(
    product_id: product12.id,
    title: "It is what I expected",
    body: "I bought for my daughter’s birthday goody bag, and it looks pretty.",
    rating: 4,
    reviewer_id: user16.id 
)

review47= Review.create!(
    product_id: product13.id,
    title: "Undesirable",
    body: "Our first trip to the beach with it and the sand screw broke. ",
    rating: 1,
    reviewer_id: user2.id 
)

review48= Review.create!(
    product_id: product13.id,
    title: "Okay product",
    body: "It did an okay job for the week vacation I used it on but I wouldn’t recommend buying for constant use",
    rating: 3,
    reviewer_id: user5.id 
)

review49= Review.create!(
    product_id: product15.id,
    title: "Great bottles",
    body: "They are very nice and pretty. I highly recommended it.",
    rating: 5,
    reviewer_id: user10.id 
)


review50= Review.create!(
    product_id: product15.id,
    title: "Nice quality",
    body: "Very nice quality.",
    rating: 5,
    reviewer_id: user9.id 
)

review51= Review.create!(
    product_id: product15.id,
    title: "Nice product",
    body: "It looks nice.",
    rating: 4,
    reviewer_id: user3.id 
)

review52= Review.create!(
    product_id: product15.id,
    title: "Worthy purchase.",
    body: "I love love this product.",
    rating: 4,
    reviewer_id: user15.id 
)

puts "seeds.rb DONE."
 
 




















