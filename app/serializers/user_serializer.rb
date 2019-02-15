class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :profile_photo, :location

  has_many :postings



end
