class CommentSerializer < ActiveModel::Serializer
  attributes :id, :description, :user_name

  belongs_to :posting

  def user_name
    object.user.name
  end
end
