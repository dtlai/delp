# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Business.delete_all

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
    phone_number: '(213)389-8777',
    price_range: '$$',
)

business2 = Business.create!(
    name: 'Yup Dduk LA',
    address: '3603 W 6th St Koreatown',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90020',
    phone_number: '(213)263-2355',
    price_range: '$$',
)

# bizfile1_1 = URI.open('https://delp-seeds.s3-us-west-1.amazonaws.com/biz_pics/yupdduk/yupdduk_1.jpeg')
# bizfile1_2 = URI.open('https://delp-seeds.s3-us-west-1.amazonaws.com/biz_pics/yupdduk/yupdduk_2.jpeg')
# bizfile1_3 = URI.open('https://delp-seeds.s3-us-west-1.amazonaws.com/biz_pics/yupdduk/yupdduk_3.jpeg')
# bizfile1_4 = URI.open('https://delp-seeds.s3-us-west-1.amazonaws.com/biz_pics/yupdduk/yupdduk_4.jpeg')

bizfile2_1 = File.open('/Users/David/Desktop/Coding/delp/delp_pics/yupdduk/yupdduk_1.jpeg')
bizfile2_2 = File.open('/Users/David/Desktop/Coding/delp/delp_pics/yupdduk/yupdduk_2.jpeg')
bizfile2_3 = File.open('/Users/David/Desktop/Coding/delp/delp_pics/yupdduk/yupdduk_3.jpeg')
bizfile2_4 = File.open('/Users/David/Desktop/Coding/delp/delp_pics/yupdduk/yupdduk_4.jpeg')

business2.photos.attach(io: bizfile2_1, filename: 'yupdduk_1.jpeg')
business2.photos.attach(io: bizfile2_2, filename: 'yupdduk_2.jpeg')
business2.photos.attach(io: bizfile2_3, filename: 'yupdduk_3.jpeg')
business2.photos.attach(io: bizfile2_4, filename: 'yupdduk_4.jpeg')
