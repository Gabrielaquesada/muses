class CommentSerializer < ActiveModel::Serializer
  attributes :id, :description, :user_name, :user_photo, :posting_time

  belongs_to :posting

  def user_name
    object.user.name
  end
  def user_photo
    object.user.profile_photo
  end
  def posting_time
    object.user.created_at
  end
end
