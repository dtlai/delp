# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Business.delete_all

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

# pic1_1 = URI.open('https://s3-media0.fl.yelpcdn.com/bphoto/UE_ZY3fBqOaun7z-75Drbw/l.jpg')
# business1.photos.attach(io: pic1_1, filename:'haejangchon1.jpg')