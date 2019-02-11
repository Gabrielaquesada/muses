class PostingSerializer < ActiveModel::Serializer
  attributes :id, :description, :user_name

  has_many :comments
  
  def user_name
    object.user.name
  end
end
