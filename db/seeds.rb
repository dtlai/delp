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

user1 = User.create!(
    first_name: 'Guest',
    last_name: 'User',
    email: 'guest_user@email.com',
    password: 'guestuser',
    zipcode: '90045',
    birthday: '01/01/1990',
) 

user2 = User.create!(
    first_name: 'Guest',
    last_name: 'User',
    email: 'guest_user@email.com',
    password: 'guestuser',
    zipcode: '90045',
    birthday: '01/01/1990',
) 

user3 = User.create!(
    first_name: 'Guest',
    last_name: 'User',
    email: 'guest_user@email.com',
    password: 'guestuser',
    zipcode: '90045',
    birthday: '01/01/1990',
) 

user4 = User.create!(
    first_name: 'Guest',
    last_name: 'User',
    email: 'guest_user@email.com',
    password: 'guestuser',
    zipcode: '90045',
    birthday: '01/01/1990',
) 

user5 = User.create!(
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

business9 = Business.create!(
    name: 'Sun Nong Dan',
    address: '3470 W 6th St Ste 7',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90020',
    phone_number: '(213) 365-0303',
    price_range: '$$$',
)

business10 = Business.create!(
    name: 'Han Bat Sul Lung Tang',
    address: '4163 W 5th St',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90020',
    phone_number: '(213) 383-9499',
    price_range: '$$',
)

business11 = Business.create!(
    name: 'Yang Chow',
    address: '819 N Broadway',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90012',
    phone_number: '(213) 625-0811',
    price_range: '$$',
)

business12 = Business.create!(
    name: 'Won Kok',
    address: '210 Alpine St',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90012',
    phone_number: '(213) 613-0700',
    price_range: '$',
)

business13 = Business.create!(
    name: 'Golden Dragon',
    address: '960 N Broadway',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90012',
    phone_number: '(213) 613-0700',
    price_range: '$$',
)

business14 = Business.create!(
    name: 'Full House Seafood',
    address: '963 N Hill St',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90012',
    phone_number: '(213) 617-8382',
    price_range: '$$',
)

business15 = Business.create!(
    name: 'Lao Tao',
    address: '727 N Broadway Unit 207',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90012',
    phone_number: '(213) 372-5318',
    price_range: '$$',
)

business16 = Business.create!(
    name: 'Pho 87',
    address: '1019 N Broadway',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90012',
    phone_number: '(323) 227-0758',
    price_range: '$$',
)

business17 = Business.create!(
    name: 'Au Lac',
    address: '710 W 1st St',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90012',
    phone_number: '(213) 617-2533',
    price_range: '$$',
)

business18 = Business.create!(
    name: 'Thien Huong',
    address: '727 N Broadway',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90012',
    phone_number: '(213) 626-0764',
    price_range: '$',
)

business19 = Business.create!(
    name: 'My Dung Sandwich Shop',
    address: '314 Ord St',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90012',
    phone_number: '(213) 617-7094',
    price_range: '$',
)

business20 = Business.create!(
    name: 'Blossom Restaurant',
    address: '426 S Main St',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90013',
    phone_number: '(213) 623-1973',
    price_range: '$$',
)

business21 = Business.create!(
    name: 'Leos Tacos Truck',
    address: '1515 S La Brea Ave',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90019',
    phone_number: '(323) 346-2001',
    price_range: '$',
)

business22 = Business.create!(
    name: 'El Chato Taco Truck',
    address: '5300 W Olympic Blvd',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90019',
    phone_number: '(323) 202-6936',
    price_range: '$',
)

business23 = Business.create!(
    name: 'Taqueria Los Anaya',
    address: '4651 W Adams Blvd',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90016',
    phone_number: '(323) 731-4070',
    price_range: '$',
)

business24 = Business.create!(
    name: 'Glorias Cafe',
    address: '10227 Venice Blvd',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90034',
    phone_number: '(310) 838-0963',
    price_range: '$$',
)

business25 = Business.create!(
    name: 'Mercado',
    address: '7910 W 3rd St',
    city: 'Los Angeles',
    state: 'CA',
    biz_zipcode: '90048',
    phone_number: '(323) 944-0947',
    price_range: '$$',
)


#### ________________________________________a-end

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

## ________________________________________

bizfile9_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/sunnong1.jpeg')
bizfile9_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/sunnong2.jpeg')
bizfile9_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/sunnong3.jpeg')
bizfile9_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/sunnong4.jpeg')

business9.photos.attach(io: bizfile9_1, filename: 'sunnong1.jpeg')
business9.photos.attach(io: bizfile9_2, filename: 'sunnong2.jpeg')
business9.photos.attach(io: bizfile9_3, filename: 'sunnong3.jpeg')
business9.photos.attach(io: bizfile9_4, filename: 'sunnong4.jpeg')

## ________________________________________

bizfile10_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/hanbat1.jpeg')
bizfile10_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/hanbat2.jpeg')
bizfile10_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/hanbat3.jpeg')
bizfile10_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/hanbat4.jpeg')

business10.photos.attach(io: bizfile10_1, filename: 'hanbat1.jpeg')
business10.photos.attach(io: bizfile10_2, filename: 'hanbat2.jpeg')
business10.photos.attach(io: bizfile10_3, filename: 'hanbat3.jpeg')
business10.photos.attach(io: bizfile10_4, filename: 'hanbat4.jpeg')

## ________________________________________

bizfile11_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/yangchow1.jpeg')
bizfile11_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/yangchow2.jpeg')
bizfile11_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/yangchow3.jpeg')
bizfile11_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/yangchow4.jpeg')

business11.photos.attach(io: bizfile11_1, filename: 'yangchow1.jpeg')
business11.photos.attach(io: bizfile11_2, filename: 'yangchow2.jpeg')
business11.photos.attach(io: bizfile11_3, filename: 'yangchow3.jpeg')
business11.photos.attach(io: bizfile11_4, filename: 'yangchow4.jpeg')

## ________________________________________

bizfile12_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/wonkok1.jpeg')
bizfile12_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/wonkok2.jpeg')
bizfile12_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/wonkok3.jpeg')
bizfile12_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/wonkok4.jpeg')

business12.photos.attach(io: bizfile12_1, filename: 'wonkok1.jpeg')
business12.photos.attach(io: bizfile12_2, filename: 'wonkok2.jpeg')
business12.photos.attach(io: bizfile12_3, filename: 'wonkok3.jpeg')
business12.photos.attach(io: bizfile12_4, filename: 'wonkok4.jpeg')

## ________________________________________

bizfile13_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/fullhouse1.jpeg')
bizfile13_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/goldendrag2.jpeg')
bizfile13_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/goldendrag3.jpeg')
bizfile13_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/goldendrag4.jpeg')

business13.photos.attach(io: bizfile13_1, filename: 'goldendrag1.jpeg')
business13.photos.attach(io: bizfile13_2, filename: 'goldendrag2.jpeg')
business13.photos.attach(io: bizfile13_3, filename: 'goldendrag3.jpeg')
business13.photos.attach(io: bizfile13_4, filename: 'goldendrag4.jpeg')

## ________________________________________

bizfile14_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/fullhouse1.jpeg')
bizfile14_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/fullhouse2.jpeg')
bizfile14_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/fullhouse3.jpeg')
bizfile14_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/fullhouse4.jpeg')

business14.photos.attach(io: bizfile14_1, filename: 'fullhouse1.jpeg')
business14.photos.attach(io: bizfile14_2, filename: 'fullhouse2.jpeg')
business14.photos.attach(io: bizfile14_3, filename: 'fullhouse3.jpeg')
business14.photos.attach(io: bizfile14_4, filename: 'fullhouse4.jpeg')

## ________________________________________

bizfile15_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/laotao1.jpeg')
bizfile15_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/laotao2.jpeg')
bizfile15_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/laotao3.jpeg')
bizfile15_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/laotao4.jpeg')

business15.photos.attach(io: bizfile15_1, filename: 'laotao1.jpeg')
business15.photos.attach(io: bizfile15_2, filename: 'laotao2.jpeg')
business15.photos.attach(io: bizfile15_3, filename: 'laotao3.jpeg')
business15.photos.attach(io: bizfile15_4, filename: 'laotao4.jpeg')

## ________________________________________

bizfile16_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/pho871.jpeg')
bizfile16_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/pho872.jpeg')
bizfile16_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/pho873.jpeg')
bizfile16_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/pho874.jpeg')

business16.photos.attach(io: bizfile16_1, filename: 'pho871.jpeg')
business16.photos.attach(io: bizfile16_2, filename: 'pho872.jpeg')
business16.photos.attach(io: bizfile16_3, filename: 'pho873.jpeg')
business16.photos.attach(io: bizfile16_4, filename: 'pho874.jpeg')

## ________________________________________

bizfile17_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/auluc1.jpeg')
bizfile17_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/auluc2.jpeg')
bizfile17_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/auluc3.jpeg')
bizfile17_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/auluc4.jpeg')

business17.photos.attach(io: bizfile17_1, filename: 'auluc1.jpeg')
business17.photos.attach(io: bizfile17_2, filename: 'auluc2.jpeg')
business17.photos.attach(io: bizfile17_3, filename: 'auluc3.jpeg')
business17.photos.attach(io: bizfile17_4, filename: 'auluc4.jpeg')

## ________________________________________

bizfile18_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/thienhuong1.jpeg')
bizfile18_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/thienhuong2.jpeg')
bizfile18_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/thienhuong3.jpeg')
bizfile18_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/thienhuong4.jpeg')

business18.photos.attach(io: bizfile18_1, filename: 'thienhuong1.jpeg')
business18.photos.attach(io: bizfile18_2, filename: 'thienhuong2.jpeg')
business18.photos.attach(io: bizfile18_3, filename: 'thienhuong3.jpeg')
business18.photos.attach(io: bizfile18_4, filename: 'thienhuong4.jpeg')

## ________________________________________

bizfile19_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/mydung1.jpeg')
bizfile19_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/mydung2.jpeg')
bizfile19_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/mydung3.jpeg')
bizfile19_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/mydung4.jpeg')

business19.photos.attach(io: bizfile19_1, filename: 'mydung1.jpeg')
business19.photos.attach(io: bizfile19_2, filename: 'mydung2.jpeg')
business19.photos.attach(io: bizfile19_3, filename: 'mydung3.jpeg')
business19.photos.attach(io: bizfile19_4, filename: 'mydung4.jpeg')

## ________________________________________

bizfile20_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/blossom1.jpeg')
bizfile20_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/blossom2.jpeg')
bizfile20_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/blossom3.jpeg')
bizfile20_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/blossom4.jpeg')

business20.photos.attach(io: bizfile20_1, filename: 'blossom1.jpeg')
business20.photos.attach(io: bizfile20_2, filename: 'blossom2.jpeg')
business20.photos.attach(io: bizfile20_3, filename: 'blossom3.jpeg')
business20.photos.attach(io: bizfile20_4, filename: 'blossom4.jpeg')

## ________________________________________

bizfile21_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/leos1.jpeg')
bizfile21_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/leos2.jpeg')
bizfile21_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/leos3.jpeg')
bizfile21_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/leos4.jpeg')

business21.photos.attach(io: bizfile21_1, filename: 'leos1.jpeg')
business21.photos.attach(io: bizfile21_2, filename: 'leos2.jpeg')
business21.photos.attach(io: bizfile21_3, filename: 'leos3.jpeg')
business21.photos.attach(io: bizfile21_4, filename: 'leos4.jpeg')

## ________________________________________

bizfile22_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/elchato1.jpeg')
bizfile22_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/elchato2.jpeg')
bizfile22_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/elchato3.jpeg')
bizfile22_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/elchato4.jpeg')

business22.photos.attach(io: bizfile22_1, filename: 'elchato1.jpeg')
business22.photos.attach(io: bizfile22_2, filename: 'elchato2.jpeg')
business22.photos.attach(io: bizfile22_3, filename: 'elchato3.jpeg')
business22.photos.attach(io: bizfile22_4, filename: 'elchato4.jpeg')

## ________________________________________

bizfile23_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/losanaya1.jpeg')
bizfile23_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/losanaya2.jpeg')
bizfile23_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/losanaya3.jpeg')
bizfile23_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/losanaya4.jpeg')

business23.photos.attach(io: bizfile23_1, filename: 'losanaya1.jpeg')
business23.photos.attach(io: bizfile23_2, filename: 'losanaya2.jpeg')
business23.photos.attach(io: bizfile23_3, filename: 'losanaya3.jpeg')
business23.photos.attach(io: bizfile23_4, filename: 'losanaya4.jpeg')

## ________________________________________

bizfile24_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/glorias1.jpeg')
bizfile24_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/glorias2.jpeg')
bizfile24_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/glorias3.jpeg')
bizfile24_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/glorias4.jpeg')

business24.photos.attach(io: bizfile24_1, filename: 'glorias1.jpeg')
business24.photos.attach(io: bizfile24_2, filename: 'glorias2.jpeg')
business24.photos.attach(io: bizfile24_3, filename: 'glorias3.jpeg')
business24.photos.attach(io: bizfile24_4, filename: 'glorias4.jpeg')

## ________________________________________

bizfile25_1 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/mercado1.jpeg')
bizfile25_2 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/mercado2.jpeg')
bizfile25_3 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/mercado3.jpeg')
bizfile25_4 = URI.open('https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/mercado4.jpeg')

business25.photos.attach(io: bizfile25_1, filename: 'mercado1.jpeg')
business25.photos.attach(io: bizfile25_2, filename: 'mercado2.jpeg')
business25.photos.attach(io: bizfile25_3, filename: 'mercado3.jpeg')
business25.photos.attach(io: bizfile25_4, filename: 'mercado4.jpeg')


#### _______________________________________uh-photo-end

korean_cat = Category.create!(category: "Korean")
japanese_cat = Category.create!(category: "Japanese")
chinese_cat = Category.create!(category: "Chinese")
viet_cat = Category.create!(category: "Vietnamese")
mexican_cat = Category.create!(category: "Mexican")
lunch_cat = Category.create!(category: "Lunch")
dinner_cat = Category.create!(category: "Dinner")

#### ________________________________________cat-end

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

b_c9 = BusinessCategory.create!(business_id: business9.id, category_id: korean_cat.id)
b_c9 = BusinessCategory.create!(business_id: business9.id, category_id: dinner_cat.id)

b_c10 = BusinessCategory.create!(business_id: business10.id, category_id: korean_cat.id)
b_c10 = BusinessCategory.create!(business_id: business10.id, category_id: lunch_cat.id)

b_c11 = BusinessCategory.create!(business_id: business11.id, category_id: chinese_cat.id)
b_c11 = BusinessCategory.create!(business_id: business11.id, category_id: dinner_cat.id)

b_c12 = BusinessCategory.create!(business_id: business12.id, category_id: chinese_cat.id)
b_c12 = BusinessCategory.create!(business_id: business12.id, category_id: lunch_cat.id)

b_c13 = BusinessCategory.create!(business_id: business13.id, category_id: chinese_cat.id)
b_c13 = BusinessCategory.create!(business_id: business13.id, category_id: lunch_cat.id)

b_c14 = BusinessCategory.create!(business_id: business14.id, category_id: chinese_cat.id)
b_c14 = BusinessCategory.create!(business_id: business14.id, category_id: dinner_cat.id)

b_c15 = BusinessCategory.create!(business_id: business15.id, category_id: chinese_cat.id)
b_c15 = BusinessCategory.create!(business_id: business15.id, category_id: lunch_cat.id)

b_c16 = BusinessCategory.create!(business_id: business16.id, category_id: viet_cat.id)
b_c16 = BusinessCategory.create!(business_id: business16.id, category_id: dinner_cat.id)

b_c17 = BusinessCategory.create!(business_id: business17.id, category_id: viet_cat.id)
b_c17 = BusinessCategory.create!(business_id: business17.id, category_id: dinner_cat.id)

b_c18 = BusinessCategory.create!(business_id: business18.id, category_id: viet_cat.id)
b_c18 = BusinessCategory.create!(business_id: business18.id, category_id: dinner_cat.id)

b_c19 = BusinessCategory.create!(business_id: business19.id, category_id: viet_cat.id)
b_c19 = BusinessCategory.create!(business_id: business19.id, category_id: lunch_cat.id)

b_c20 = BusinessCategory.create!(business_id: business20.id, category_id: viet_cat.id)
b_c20 = BusinessCategory.create!(business_id: business20.id, category_id: lunch_cat.id)

b_c21 = BusinessCategory.create!(business_id: business21.id, category_id: mexican_cat.id)
b_c21 = BusinessCategory.create!(business_id: business21.id, category_id: lunch_cat.id)

b_c22 = BusinessCategory.create!(business_id: business22.id, category_id: mexican_cat.id)
b_c22 = BusinessCategory.create!(business_id: business22.id, category_id: lunch_cat.id)

b_c23 = BusinessCategory.create!(business_id: business23.id, category_id: mexican_cat.id)
b_c23 = BusinessCategory.create!(business_id: business23.id, category_id: dinner_cat.id)

b_c24 = BusinessCategory.create!(business_id: business24.id, category_id: mexican_cat.id)
b_c24 = BusinessCategory.create!(business_id: business24.id, category_id: dinner_cat.id)

b_c25 = BusinessCategory.create!(business_id: business25.id, category_id: mexican_cat.id)
b_c25 = BusinessCategory.create!(business_id: business25.id, category_id: dinner_cat.id)

#### _______________categ-end

r1a = Review.create! (business_id: business1.id,rating: 5, author_id: user1.id,message: "First time coming to this place and I have to say, it was one of the best food I've ever tried. Everything on the menu was amazing and I thoroughly enjoyed the food. The service was also excellent as they really took care of me. Would definitely recommend checking out this business.")
r1b = Review.create! (business_id: business1.id,rating: 4, author_id: user2.id,message: "I would definitely rate the food as some of the best I have had. Wished it came out a bit faster, but still definitely enjoyed my experience as this business.")
r1c = Review.create! (business_id: business1.id,rating: 5, author_id: user3.id,message: "Wow I gotta say, I did not expect this place to be so good. The food was excellent and the service was just as great. Would recommend anyone who wants excellent food and service to come check this business out.")
r1d = Review.create! (business_id: business1.id,rating: 5, author_id: user4.id,message: "If you ask me, this place is definitely underrated as I really enjoyed my experience at this business. The service was top notch and the food was delicious. Highly recommend for anyone who enjoys good food and good service to check this establishment out")
r1e = Review.create! (business_id: business1.id,rating: 4, author_id: user5.id,message: "I think the food was good, but service could have been better. Waited too long for our food to come so I gotta lower the rating a bit. Overall, a good experience and would still recommend giving this business a try.")



