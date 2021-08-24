# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Business.delete_all
BusinessCategory.destroy_all

require 'open-uri'

demo_user = User.create!(
    first_name: 'Guest',
    last_name: 'User',
    email: 'guest_user@email.com',
    password: 'guestuser',
    zipcode: '90045',
    birthday: '01/01/1990',
) 

business1 = Business.create!(
    name: 'Hae Jang Chon',
    address: '3821 W 6th St Koreatown',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90020',
    phone_number: '(213) 389-8777',
    price_range: '$$',
)

business2 = Business.create!(
    name: 'Yup Dduk LA',
    address: '3603 W 6th St Koreatown',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90020',
    phone_number: '(213) 263-2355',
    price_range: '$$',
)

business3 = Business.create!(
    name: 'Daikokuya',
    address: '327 E 1st St',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90012',
    phone_number: '(213) 626-1680',
    price_range: '$$',
)

business4 = Business.create!(
    name: 'Shin-Sen-Gumi Hakata Ramen',
    address: '132 S Central Ave',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90012',
    phone_number: '(213) 687-7108',
    price_range: '$$',
)

business5 = Business.create!(
    name: 'Marugame Monzo',
    address: '329 E 1st St',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90012',
    phone_number: '(213) 346-9762',
    price_range: '$$',
)

business6 = Business.create!(
    name: 'Kazunori | The Original Hand Roll Bar',
    address: '421 S Main St',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90013',
    phone_number: '(213) 493-6956',
    price_range: '$$',
)

business7 = Business.create!(
    name: 'Sushi Gen',
    address: '422 E 2nd St',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90012',
    phone_number: '(213) 617-0552',
    price_range: '$$$',
)

business8 = Business.create!(
    name: 'Hangari Kalguksu',
    address: '3470 W 6th St Ste 9&10',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90020',
    phone_number: '(213) 388-2326',
    price_range: '$$',
)


#### ________________________________________

bizfile1_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/haejang/haejang11.jpeg')
bizfile1_2 = URI.open('https://delp-seeds.s3-us-west-1.amazonaws.com/business_pics/haejang/haejang2.jpeg')
bizfile1_3 = URI.open('https://delp-seeds.s3-us-west-1.amazonaws.com/business_pics/haejang/haejang3.jpeg')
bizfile1_4 = URI.open('https://delp-seeds.s3-us-west-1.amazonaws.com/business_pics/haejang/haejang4.jpeg')

business1.photos.attach(io: bizfile1_1, filename: 'haejang11.jpeg')
business1.photos.attach(io: bizfile1_2, filename: 'haejang2.jpeg')
business1.photos.attach(io: bizfile1_3, filename: 'haejang3.jpeg')
business1.photos.attach(io: bizfile1_4, filename: 'haejang4.jpeg')

## ________________________________________

bizfile2_1 = URI.open('https://delp-seeds.s3-us-west-1.amazonaws.com/business_pics/yupdduk/yupdduk_1.jpeg')
bizfile2_2 = URI.open('https://delp-seeds.s3-us-west-1.amazonaws.com/business_pics/yupdduk/yupdduk_2.jpeg')
bizfile2_3 = URI.open('https://delp-seeds.s3-us-west-1.amazonaws.com/business_pics/yupdduk/yupdduk_3.jpeg')
bizfile2_4 = URI.open('https://delp-seeds.s3-us-west-1.amazonaws.com/business_pics/yupdduk/yupdduk_4.jpeg')

business2.photos.attach(io: bizfile2_1, filename: 'yupdduk_1.jpeg')
business2.photos.attach(io: bizfile2_2, filename: 'yupdduk_2.jpeg')
business2.photos.attach(io: bizfile2_3, filename: 'yupdduk_3.jpeg')
business2.photos.attach(io: bizfile2_4, filename: 'yupdduk_4.jpeg')

## ________________________________________

bizfile3_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/daikokuya/daikokuya1.jpeg')
bizfile3_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/daikokuya/daikokuya2.jpeg')
bizfile3_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/daikokuya/daikokuya3.jpeg')
bizfile3_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/daikokuya/daikokuya4.jpeg')

business3.photos.attach(io: bizfile3_1, filename: 'daikokuya1.jpeg')
business3.photos.attach(io: bizfile3_2, filename: 'daikokuya2.jpeg')
business3.photos.attach(io: bizfile3_3, filename: 'daikokuya3.jpeg')
business3.photos.attach(io: bizfile3_4, filename: 'daikokuya4.jpeg')

## ________________________________________

bizfile4_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/shinsengumi1.jpeg')
bizfile4_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/shinsengumi2.jpeg')
bizfile4_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/shinsengumi3.jpeg')
bizfile4_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/shinsengumi4.jpeg')

business4.photos.attach(io: bizfile4_1, filename: 'shinsengumi1.jpeg')
business4.photos.attach(io: bizfile4_2, filename: 'shinsengumi2.jpeg')
business4.photos.attach(io: bizfile4_3, filename: 'shinsengumi3.jpeg')
business4.photos.attach(io: bizfile4_4, filename: 'shinsengumi4.jpeg')

## ________________________________________

bizfile5_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/marugame1.jpeg')
bizfile5_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/marugame2.jpeg')
bizfile5_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/marugame3.jpeg')
bizfile5_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/marugame4.jpeg')

business5.photos.attach(io: bizfile5_1, filename: 'marugame1.jpeg')
business5.photos.attach(io: bizfile5_2, filename: 'marugame2.jpeg')
business5.photos.attach(io: bizfile5_3, filename: 'marugame3.jpeg')
business5.photos.attach(io: bizfile5_4, filename: 'marugame4.jpeg')

## ________________________________________

bizfile6_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/kazunori1.jpeg')
bizfile6_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/kazunori2.jpeg')
bizfile6_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/kazunori3.jpeg')
bizfile6_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/kazunori4.jpeg')

business6.photos.attach(io: bizfile6_1, filename: 'kazunori1.jpeg')
business6.photos.attach(io: bizfile6_2, filename: 'kazunori2.jpeg')
business6.photos.attach(io: bizfile6_3, filename: 'kazunori3.jpeg')
business6.photos.attach(io: bizfile6_4, filename: 'kazunori4.jpeg')

## ________________________________________

bizfile7_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/sushigen1.jpeg')
bizfile7_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/sushigen2.jpeg')
bizfile7_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/sushigen3.jpeg')
bizfile7_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/sushigen4.jpeg')

business7.photos.attach(io: bizfile7_1, filename: 'sushigen1.jpeg')
business7.photos.attach(io: bizfile7_2, filename: 'sushigen2.jpeg')
business7.photos.attach(io: bizfile7_3, filename: 'sushigen3.jpeg')
business7.photos.attach(io: bizfile7_4, filename: 'sushigen4.jpeg')

## ________________________________________

bizfile8_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/hangari1.jpeg')
bizfile8_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/hangari2.jpeg')
bizfile8_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/hangari3.jpeg')
bizfile8_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/hangari4.jpeg')

business8.photos.attach(io: bizfile8_1, filename: 'hangari1.jpeg')
business8.photos.attach(io: bizfile8_2, filename: 'hangari2.jpeg')
business8.photos.attach(io: bizfile8_3, filename: 'hangari3.jpeg')
business8.photos.attach(io: bizfile8_4, filename: 'hangari4.jpeg')


#### _______________________________________

korean_cat = Category.create!(category: "Korean")
japanese_cat = Category.create!(category: "Japanese")
lunch_cat = Category.create!(category: "Lunch")
dinner_cat = Category.create!(category: "Dinner")

#### ________________________________________

b_c1 = BusinessCategory.create!(business_id: business1.id, category_id: korean_cat.id)
b_c1 = BusinessCategory.create!(business_id: business1.id, category_id: dinner_cat.id)

b_c2 = BusinessCategory.create!(business_id: business2.id, category_id: korean_cat.id)
b_c2 = BusinessCategory.create!(business_id: business2.id, category_id: lunch_cat.id)

b_c3 = BusinessCategory.create!(business_id: business3.id, category_id: japanese_cat.id)
b_c3 = BusinessCategory.create!(business_id: business3.id, category_id: dinner_cat.id)

b_c4 = BusinessCategory.create!(business_id: business4.id, category_id: japanese_cat.id)
b_c4 = BusinessCategory.create!(business_id: business4.id, category_id: lunch_cat.id)

b_c5 = BusinessCategory.create!(business_id: business5.id, category_id: japanese_cat.id)
b_c5 = BusinessCategory.create!(business_id: business5.id, category_id: lunch_cat.id)

b_c6 = BusinessCategory.create!(business_id: business6.id, category_id: japanese_cat.id)
b_c6 = BusinessCategory.create!(business_id: business6.id, category_id: dinner_cat.id)

b_c7 = BusinessCategory.create!(business_id: business7.id, category_id: japanese_cat.id)
b_c7 = BusinessCategory.create!(business_id: business7.id, category_id: dinner_cat.id)

b_c8 = BusinessCategory.create!(business_id: business8.id, category_id: korean_cat.id)
b_c8 = BusinessCategory.create!(business_id: business8.id, category_id: lunch_cat.id)


