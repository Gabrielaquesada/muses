# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: 'Lana del Rey', email: 'l.delrey@gmail.com', password: 'password')
User.create(name: 'Jimi Hendrix', email: 'j.hendrix@gmail.com', password: 'password')
User.create(name: 'David Bowie', email: 'd.bowie@gmail.com', password: 'password')
User.create(name: 'Freddie Mercury', email: 'mercury@gmail.com', password: 'password')
User.create(name: 'Travis Scott', email: 't.scott@gmail.com', password: 'password')
User.create(name: 'The Weeknd', email: 'weeknd@gmail.com', password: 'password')
User.create(name: 'Billy Idol', email: 'billyidle@gmail.com', password: 'password')

Posting.create(user_id: 1, description: 'posting 1')
Posting.create(user_id: 3, description: 'spaceoddity v.01.34, collab?')
Posting.create(user_id: 1, description: 'fjkdslas djsaklda vnrjilbf vnjreklwbf')
Posting.create(user_id: 3, description: 'posting 3')
Posting.create(user_id: 6, description: 'posting 4')

Comment.create(user_id: 2, posting_id: 2, description: 'what')
Comment.create(user_id: 1, posting_id: 2, description: 'cool')
Comment.create(user_id: 3, posting_id: 3, description: 'yeah')
Comment.create(user_id: 6, posting_id: 1, description: 'chill')
