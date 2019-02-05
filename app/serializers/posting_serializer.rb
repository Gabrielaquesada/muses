class PostingSerializer < ActiveModel::Serializer
  attributes :id, :description, :user_name

  def user_name
    object.user.name
  end
end
