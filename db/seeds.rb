# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: 'Kaki King', email: 'k@gmail.com', password: 'password', profile_photo: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Kaki_King_Knitting_Factory_04.jpg', location: 'Guaynabo, Puerto Rico', bio: 'I am a guitarist based in Guaynabo, Puerto Rico and I am looking for other artist that are interested in collaborating with me.', influences: 'David Bowie, Pixies, Prince, Alice in Chains', instruments: 'guitar, bass, keyboard', music_software: 'Ableton, FL', projects: 'Emblem EP, Rose Engraved' )
User.create(name: 'Vera', email: 'vera@gmail.com', password: 'password', profile_photo: 'https://cdn1-www.musicfeeds.com.au/assets/uploads/vera-blue-671x377.png', location: 'Ponce, Puerto Rico')
User.create(name: 'Lynn Gunn', email: 'gunn@gmail.com', password: 'password', profile_photo: 'https://showbizpost.com/wp-content/uploads/2018/07/Lynn-Gunn-1-780x405.jpg', location: 'Santurce, Puerto Rico')
User.create(name: 'Beach House', email: 'beachouse@gmail.com', password: 'password', profile_photo: 'https://media2.fdncms.com/riverfronttimes/imager/u/magnum/3018755/music1-1-536c1b524bcc29bc.jpg', location: 'Santurce, Puerto Rico')


Posting.create(user_id: 1, description: 'Looking for a guitarist in Ponce that would be open to collaborate with me in a Latin-disco-synth-trap track.' )
Posting.create(user_id: 3, description: 'Requesting drummers near the Santurce area that would be open to making a Funk metal band.')
Posting.create(user_id: 4, description: 'Currently in San Juan and looking for a Bassist that would be open to making a funkcore dream pop.')
Posting.create(user_id: 3, description: 'Looking to add synths for an ambiental soft pop track.')


Comment.create(user_id: 4, posting_id: 2, description: 'Im a drummer based in Santurce, I would love to jam out with you.')
Comment.create(user_id: 3, posting_id: 2, description: 'Im from Rio Piedras, which is close enough. I would love to collaborate with you.')
Comment.create(user_id: 1, posting_id: 2, description: 'I would love to collaborate. I used to be in a band where we experimented with funk, disco, hardcore and metalcore.')
