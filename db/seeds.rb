# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: 'Lena', email: 'lena@gmail.com', password: 'password')
User.create(name: 'Vera', email: 'vera@gmail.com', password: 'password')
User.create(name: 'Lynn Gunn', email: 'gunn@gmail.com', password: 'password')
User.create(name: 'Beach House', email: 'beachouse@gmail.com', password: 'password')


Posting.create(user_id: 1, description: 'Looking for a guitarist in Rio Piedras that would be open to collaborate with me in a Latin-disco-synth-trap track.' )
Posting.create(user_id: 2, description: 'Requesting drummers near the Santurce area that would be open to making a Funk metal band.')
Posting.create(user_id: 3, description: 'Currently in San Juan and looking for a Bassist that would be open to making a funkcore dream pop.')
Posting.create(user_id: 1, description: 'Looking to add synths for an ambiental soft pop track.')
Posting.create(user_id: 4, description: 'Resquesting for singers that would want to collaborate in a ambiental melodic track')


Comment.create(user_id: 4, posting_id: 2, description: 'Im a drummer based in Santurce, I would love to jam out with you.')
Comment.create(user_id: 3, posting_id: 2, description: 'Im from Rio Piedras, which is close enough. I would love to collaborate with you.')
Comment.create(user_id: 1, posting_id: 2, description: 'I would love to collaborate. I used to be in a band where we experimented with funk, disco, hardcore and metalcore.')
