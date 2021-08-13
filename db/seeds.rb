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

bizfile1_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/haejang/haejang11.jpeg')
bizfile1_2 = URI.open('https://delp-seeds.s3-us-west-1.amazonaws.com/business_pics/haejang/haejang2.jpeg')
bizfile1_3 = URI.open('https://delp-seeds.s3-us-west-1.amazonaws.com/business_pics/haejang/haejang3.jpeg')
bizfile1_4 = URI.open('https://delp-seeds.s3-us-west-1.amazonaws.com/business_pics/haejang/haejang4.jpeg')

business1.photos.attach(io: bizfile1_1, filename: 'haejang11.jpeg')
business1.photos.attach(io: bizfile1_2, filename: 'haejang2.jpeg')
business1.photos.attach(io: bizfile1_3, filename: 'haejang3.jpeg')
business1.photos.attach(io: bizfile1_4, filename: 'haejang4.jpeg')


bizfile2_1 = URI.open('https://delp-seeds.s3-us-west-1.amazonaws.com/business_pics/yupdduk/yupdduk_1.jpeg')
bizfile2_2 = URI.open('https://delp-seeds.s3-us-west-1.amazonaws.com/business_pics/yupdduk/yupdduk_2.jpeg')
bizfile2_3 = URI.open('https://delp-seeds.s3-us-west-1.amazonaws.com/business_pics/yupdduk/yupdduk_3.jpeg')
bizfile2_4 = URI.open('https://delp-seeds.s3-us-west-1.amazonaws.com/business_pics/yupdduk/yupdduk_4.jpeg')

business2.photos.attach(io: bizfile2_1, filename: 'yupdduk_1.jpeg')
business2.photos.attach(io: bizfile2_2, filename: 'yupdduk_2.jpeg')
business2.photos.attach(io: bizfile2_3, filename: 'yupdduk_3.jpeg')
business2.photos.attach(io: bizfile2_4, filename: 'yupdduk_4.jpeg')


bizfile3_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/daikokuya/daikokuya1.jpeg')
bizfile3_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/daikokuya/daikokuya2.jpeg')
bizfile3_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/daikokuya/daikokuya3.jpeg')
bizfile3_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/daikokuya/daikokuya4.jpeg')

business3.photos.attach(io: bizfile3_1, filename: 'daikokuya1.jpeg')
business3.photos.attach(io: bizfile3_2, filename: 'daikokuya2.jpeg')
business3.photos.attach(io: bizfile3_3, filename: 'daikokuya3.jpeg')
business3.photos.attach(io: bizfile3_4, filename: 'daikokuya4.jpeg')


bizfile4_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/shinsengumi1.jpeg')
bizfile4_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/shinsengumi2.jpeg')
bizfile4_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/shinsengumi3.jpeg')
bizfile4_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/shinsengumi4.jpeg')

business4.photos.attach(io: bizfile4_1, filename: 'shinsengumi1.jpeg')
business4.photos.attach(io: bizfile4_2, filename: 'shinsengumi1.jpeg')
business4.photos.attach(io: bizfile4_3, filename: 'shinsengumi1.jpeg')
business4.photos.attach(io: bizfile4_4, filename: 'shinsengumi1.jpeg')



korean_cat = Category.create!(category: "Korean")
japanese_cat = Category.create!(category: "Japanese")
lunch_cat = Category.create!(category: "Lunch")
dinner_cat = Category.create!(category: "Dinner")



b_c1 = BusinessCategory.create!(business_id: business1.id, category_id: korean_cat.id)
b_c1 = BusinessCategory.create!(business_id: business1.id, category_id: dinner_cat.id)

b_c2 = BusinessCategory.create!(business_id: business2.id, category_id: korean_cat.id)
b_c2 = BusinessCategory.create!(business_id: business2.id, category_id: lunch_cat.id)

b_c3 = BusinessCategory.create!(business_id: business3.id, category_id: japanese_cat.id)
b_c3 = BusinessCategory.create!(business_id: business3.id, category_id: dinner_cat.id)

b_c4 = BusinessCategory.create!(business_id: business4.id, category_id: japanese_cat.id)
b_c4 = BusinessCategory.create!(business_id: business4.id, category_id: lunch_cat.id)
